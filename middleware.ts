import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { kv } from "@vercel/kv";

const SupabaseRoutes = [
  "/api/push/token",
  "/api/evm/contract",
  "/api/users/update",
];
const RateLimits = {
  rpc: {
    limitDuration: 60,
    maxRequests: 60,
  },
  simulation: {
    limitDuration: 60,
    maxRequests: 10,
  },
};

export async function middleware(request: NextRequest) {
  /**
   * Current path
   */
  const pathname = request.nextUrl.pathname;

  /**
   * Content-type checking for all API routes
   */
  if (pathname.startsWith("/api/")) {
    if (["POST", "PUT", "PATCH"].includes(request.method)) {
      // Check if content-type is application/json
      const contentType = request.headers.get("content-type");

      // If not application/json, return 415
      if (!contentType || contentType !== "application/json") {
        return new NextResponse(
          JSON.stringify({ error: "Content-Type must be application/json" }),
          {
            status: 415,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }
  }

  let rateLimitTag: string | null = null;

  if (pathname.startsWith("/api/rpc/")) {
    rateLimitTag = "rpc";
  } else if (pathname.startsWith("/api/simulation/")) {
    rateLimitTag = "simulation";
  }

  /**
   * Rate limiting for specific routes that have been tagged
   */
  if (rateLimitTag) {
    const ip =
      request.ip ?? request.headers.get("x-forwarded-for") ?? "unknown";
    const key = `rate-limit:${ip}:${rateLimitTag}`;

    const currentRequests = (await kv.get<number>(key)) || 0;

    if (
      currentRequests >=
      RateLimits[rateLimitTag as keyof typeof RateLimits].maxRequests
    ) {
      return new NextResponse(
        JSON.stringify({ error: "Rate limit exceeded" }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit":
              RateLimits[
                rateLimitTag as keyof typeof RateLimits
              ].maxRequests.toString(),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    await kv.set(key, currentRequests + 1, {
      ex: RateLimits[rateLimitTag as keyof typeof RateLimits].limitDuration,
    });
  }

  /**
   * Supabase routes are only accessible by Supabase
   */
  if (SupabaseRoutes.includes(pathname)) {
    // 1. Auth token can be passed in header
    const headerToken = request.headers.get("auth-token");

    // 2. Auth token can be passed in url params
    const urlToken = request.nextUrl.searchParams.get("auth_token");

    // It must be one of the two
    const authToken = headerToken || urlToken;

    // Check if auth token is valid
    if (!authToken || authToken !== process.env.API_SECRET_KEY) {
      return new NextResponse(JSON.stringify({ status: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }

  if (process.env.NEXT_PUBLIC_FRONTEND_TAG === "boyco") {
    // Check if the request is for the auth/verify route
    if (
      pathname.startsWith("/api/") &&
      !pathname.startsWith("/api/auth/verify") &&
      !pathname.startsWith("/api/push/token")
    ) {
      const authToken = request.headers.get("auth-token");

      const isValid = await fetch("/api/auth/verify?auth_token=" + authToken);

      if (!isValid) {
        return new NextResponse(JSON.stringify({ status: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
