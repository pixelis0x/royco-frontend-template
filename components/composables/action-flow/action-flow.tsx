"use client";

import React, { act, Fragment } from "react";
import { decodeActionsReturnType } from "@/sdk/market";
import { SlideUpWrapper } from "@/components/animations";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertIndicator } from "@/components/common";
import { cn } from "@/lib/utils";

export const ActionFlow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    actions: decodeActionsReturnType["actions"];
    size?: "sm" | "md" | "lg";
  }
>(({ className, size, actions, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full flex-col gap-3 font-gt text-base font-light text-black",
        size === "sm" && "text-sm",
        className
      )}
      {...props}
    >
      {actions !== null && actions.length !== 0 ? (
        actions.map((action, actionIndex) => {
          const BASE_KEY = `action-flow:${action.id}:${actionIndex}`;

          return (
            <SlideUpWrapper
              key={BASE_KEY}
              className={cn(
                "flex flex-row rounded-xl border border-divider bg-white p-3",
                size === "sm" && "rounded-lg p-2"
              )}
              delay={0.1 * actionIndex}
            >
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 flex-col place-content-center items-center rounded-md border border-divider",
                  size === "sm" && "h-5 w-5"
                )}
              >
                <div className={cn("flex h-5", size === "sm" && "h-4")}>
                  <span
                    className={cn("leading-5", size === "sm" && "leading-5")}
                  >
                    {actionIndex + 1}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "ml-3 mt-[0.1rem] flex grow text-wrap font-light"
                )}
              >
                <span className={cn("leading-5", size === "sm" && "leading-5")}>
                  Call to
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="mx-1 text-blue-500">
                        {action.function_name
                          ? action.function_name
                          : action.contract_function}
                      </span>
                    </TooltipTrigger>
                    {action.function_signature && (
                      <TooltipContent
                        className={cn("", size === "sm" && "text-sm")}
                      >
                        {action.function_signature}
                      </TooltipContent>
                    )}
                  </Tooltip>
                  function on:{" "}
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href={action.explorer_url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-block text-black underline decoration-secondary decoration-dotted underline-offset-[3px] transition-colors duration-200 ease-in-out hover:text-secondary hover:decoration-tertiary"
                      >
                        {action.contract_name
                          ? action.contract_name
                          : "Unknown"}
                      </a>
                    </TooltipTrigger>

                    <TooltipContent
                      className={cn("", size === "sm" && "text-sm")}
                    >
                      {action.contract_address.slice(0, 6) +
                        "..." +
                        action.contract_address.slice(-4)}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </div>
            </SlideUpWrapper>
          );
        })
      ) : (
        <AlertIndicator className="p-3">No actions added</AlertIndicator>
      )}
    </div>
  );
});
