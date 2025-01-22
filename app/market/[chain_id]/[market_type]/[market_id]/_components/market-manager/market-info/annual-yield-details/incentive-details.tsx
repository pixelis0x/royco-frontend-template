import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MarketType, useMarketManager } from "@/store";
import { AlertIndicator, InfoCard, TokenDisplayer } from "@/components/common";
import { format } from "date-fns";
import { RoycoMarketType } from "royco/market";
import { BigNumber } from "ethers";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LoadingSpinner, TokenEditor } from "@/components/composables";
import { SlideUpWrapper } from "@/components/animations";
import { useActiveMarket } from "../../../hooks";
import {
  BASE_MARGIN_TOP,
  INFO_ROW_CLASSES,
  SecondaryLabel,
  TertiaryLabel,
} from "../../../composables";
import LightningIcon from "./icons/lightning";
import { Vibrant } from "node-vibrant/browser";
import ShieldIcon from "./icons/shield";
import SparkleIcon from "./icons/sparkle";

export const DEFAULT_TOKEN_COLOR = "#bdc5d1";

export const TokenEstimatePopover = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    token_data: any;
  }
>(({ className, token_data, children, ...props }, ref) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  return (
    <HoverCard
      openDelay={200}
      closeDelay={200}
      open={open}
      onOpenChange={setOpen}
    >
      <HoverCardTrigger
        asChild
        onClick={() => {
          if (open === false) {
            setOpen(true);
          }
        }}
      >
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-96 overflow-hidden p-0">
        <TokenEditor
          closeHoverCard={() => {
            setOpen(false);
            triggerRef.current?.blur();
          }}
          token_data={{
            ...token_data,
            fdv: token_data.fdv ?? 0,
            total_supply: token_data.total_supply
              ? token_data.total_supply === 0
                ? 1
                : token_data.total_supply
              : 0,
            price: token_data.price ?? 0,
            allocation: token_data.allocation
              ? token_data.allocation * 100
              : 100,
            token_amount: token_data.token_amount ?? 0,
          }}
        />
      </HoverCardContent>
    </HoverCard>
  );
});

const IncentiveToken = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    token_data: any;
    symbolClassName?: string;
  }
>(({ className, token_data, symbolClassName, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("", className)} {...props}>
      <TokenDisplayer
        className={cn("", className)}
        symbolClassName={cn("text-sm font-medium", symbolClassName)}
        tokens={[token_data]}
        size={4}
        symbols={true}
      />
    </div>
  );
});

const IncentiveTokenDetails = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    token_data: any;
    category: string;
    labelClassName?: string;
  }
>(({ className, token_data, category, labelClassName, ...props }, ref) => {
  const { currentMarketData } = useActiveMarket();

  const [tokenColor, setTokenColor] = useState<string | null>(null);

  useEffect(() => {
    const getTokenColor = async () => {
      if (token_data && token_data.image) {
        const url = new URL(token_data.image);
        url.search = "";
        try {
          const palette = await Vibrant.from(url.toString()).getPalette();
          if (palette) {
            const swatches = Object.values(palette).filter(
              (swatch) => swatch !== null
            );
            const color = swatches.reduce((prev, current) => {
              return (prev?.population ?? 0) > (current?.population ?? 0)
                ? prev
                : current;
            });
            if (color) {
              setTokenColor(color.hex);
            }
          }
        } catch (error) {
          setTokenColor(DEFAULT_TOKEN_COLOR);
        }
      }
    };

    getTokenColor();
  }, [token_data.image]);

  const showEstimate = useMemo(() => {
    if (token_data.type === "point" && token_data.annual_change_ratio === 0) {
      return true;
    }
    return false;
  }, [token_data]);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-end", className)}
      {...props}
    >
      <SecondaryLabel
        className={cn("flex items-center gap-2 text-black", labelClassName)}
      >
        {showEstimate && currentMarketData.annual_change_ratio === 0 ? (
          <TokenEstimatePopover token_data={token_data}>
            <Button
              variant="link"
              className="flex w-full items-center gap-1 py-0 outline-none"
            >
              <LightningIcon className="h-5 w-5 fill-black" />
              <span className="text-sm font-medium underline">Estimate</span>
            </Button>
          </TokenEstimatePopover>
        ) : (
          <>
            {category === "base" ? (
              <div className="flex items-center gap-1">
                {currentMarketData.market_type === MarketType.recipe.value ? (
                  <ShieldIcon
                    className="h-5 w-5"
                    style={{ fill: tokenColor || DEFAULT_TOKEN_COLOR }}
                  />
                ) : (
                  <SparkleIcon
                    className="h-5 w-5"
                    style={{ fill: tokenColor || DEFAULT_TOKEN_COLOR }}
                  />
                )}
                <span
                  className="flex h-5 items-center font-medium"
                  style={{ color: tokenColor || DEFAULT_TOKEN_COLOR }}
                >
                  {token_data.annual_change_ratio >= 0 ? "+" : "-"}
                  {Intl.NumberFormat("en-US", {
                    style: "percent",
                    notation: "standard",
                    useGrouping: true,
                    minimumFractionDigits: 0,
                    maximumFractionDigits:
                      token_data.annual_change_ratio > 0.0001 ? 2 : 8,
                  }).format(Math.abs(token_data.annual_change_ratio))}
                </span>
              </div>
            ) : (
              <span className="flex h-5 items-center font-medium">
                {Intl.NumberFormat("en-US", {
                  style: "percent",
                  notation: "standard",
                  useGrouping: true,
                  minimumFractionDigits: 0,
                  maximumFractionDigits:
                    token_data.annual_change_ratio > 0.0001 ? 2 : 8,
                }).format(token_data.annual_change_ratio)}
              </span>
            )}
          </>
        )}
      </SecondaryLabel>

      {!!token_data.per_input_token && (
        <TertiaryLabel
          className={cn("mt-1 flex items-center justify-end gap-1", className)}
        >
          <span className="text-right">
            {Intl.NumberFormat("en-US", {
              notation: "standard",
              useGrouping: true,
              minimumFractionDigits: 2,
              maximumFractionDigits: 8,
            }).format(token_data.per_input_token)}{" "}
          </span>
          <TokenDisplayer
            className="h-4 w-4"
            size={4}
            tokens={[token_data]}
            symbols={false}
          />
          <span>per</span>
          <TokenDisplayer
            className="h-4 w-4"
            size={4}
            tokens={[currentMarketData.input_token_data]}
            symbols={false}
          />
        </TertiaryLabel>
      )}

      {category === "base" && (
        <div className="mt-1 flex flex-row items-center gap-1">
          <TertiaryLabel className={cn("text-right", className)}>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              notation: "standard",
              useGrouping: true,
              minimumFractionDigits: 2,
              maximumFractionDigits: 8,
            }).format(token_data.fdv)}{" "}
            FDV
          </TertiaryLabel>
        </div>
      )}
    </div>
  );
});

export const IncentiveDetails = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { marketMetadata, currentMarketData, currentHighestOffers, isLoading } =
    useActiveMarket();

  const { incentiveType, viewType } = useMarketManager();

  const highestIncentives = useMemo(() => {
    if (marketMetadata.market_type === RoycoMarketType.recipe.id) {
      if (
        !currentHighestOffers ||
        currentHighestOffers.ip_offers.length === 0 ||
        currentHighestOffers.ip_offers[0].tokens_data.length === 0
      ) {
        return [];
      }

      return currentHighestOffers.ip_offers[0].tokens_data;
    }

    if (marketMetadata.market_type === RoycoMarketType.vault.id) {
      if (
        !currentMarketData ||
        currentMarketData.incentive_tokens_data.length === 0
      ) {
        return [];
      }

      return currentMarketData.incentive_tokens_data.filter((token_data) => {
        return BigNumber.from(token_data.raw_amount ?? "0").gt(0);
      });
    }
  }, [currentMarketData, currentHighestOffers, marketMetadata]);

  const currentNativeIncentives = currentMarketData.yield_breakdown.filter(
    (yield_breakdown) => yield_breakdown.category !== "base"
  );

  if (isLoading) {
    return (
      <div className="flex w-full shrink-0 flex-col items-center justify-center py-3">
        <LoadingSpinner className="h-5 w-5" />
      </div>
    );
  }

  if (!!currentMarketData && !!marketMetadata) {
    return (
      <div
        ref={ref}
        className={cn("flex h-fit w-full shrink-0 flex-col", className)}
        {...props}
      >
        {(!highestIncentives || highestIncentives.length === 0) && (
          <AlertIndicator>No add. incentives offered</AlertIndicator>
        )}

        {/**
         * Market Incentives
         */}
        {highestIncentives && highestIncentives.length !== 0 && (
          <InfoCard
            className={cn(
              "flex h-fit max-h-32 flex-col gap-3 overflow-y-scroll"
            )}
          >
            {highestIncentives.map((token_data, token_data_index) => {
              const BASE_KEY = `market:incentive-info:${incentiveType}:${token_data.id}`;

              const start_date = Number(
                currentMarketData.base_start_timestamps?.[token_data_index]
              );
              const end_date = Number(
                currentMarketData.base_end_timestamps?.[token_data_index]
              );

              const base_breakdown = currentMarketData.yield_breakdown.find(
                (breakdown: any) =>
                  breakdown.category === "base" &&
                  breakdown.id === token_data.id
              );

              return (
                <SlideUpWrapper
                  layout="position"
                  layoutId={`motion:market:market-info:incentive-details:${viewType}:${token_data.id}`}
                  delay={0.1 + token_data_index * 0.1}
                >
                  <InfoCard.Row key={BASE_KEY} className={INFO_ROW_CLASSES}>
                    <InfoCard.Row.Key>
                      <IncentiveToken
                        className="mb-1"
                        token_data={{
                          ...token_data,
                          ...base_breakdown,
                        }}
                      />

                      <TertiaryLabel className="ml-5">
                        Negotiable Rate
                      </TertiaryLabel>

                      {start_date && end_date ? (
                        <TertiaryLabel className={cn("ml-5")}>
                          {`${format(start_date * 1000, "dd MMM yyyy")} - ${format(end_date * 1000, "dd MMM yyyy")}`}
                        </TertiaryLabel>
                      ) : null}
                    </InfoCard.Row.Key>

                    <InfoCard.Row.Value>
                      <IncentiveTokenDetails
                        token_data={{
                          ...token_data,
                          ...base_breakdown,
                        }}
                        category={"base"}
                      />
                    </InfoCard.Row.Value>
                  </InfoCard.Row>
                </SlideUpWrapper>
              );
            })}
          </InfoCard>
        )}

        {currentNativeIncentives && currentNativeIncentives.length !== 0 && (
          <InfoCard
            className={cn(
              "flex h-fit max-h-32 flex-col gap-3 overflow-y-scroll",
              "-mx-4 -mb-3 bg-z2 px-4 py-3",
              BASE_MARGIN_TOP.MD
            )}
          >
            {currentNativeIncentives.map((token_data, token_data_index) => {
              return (
                <SlideUpWrapper
                  layout="position"
                  layoutId={`motion:market:market-info:native-incentive-details:${viewType}:${token_data.id}`}
                  delay={0.1 + token_data_index * 0.1}
                >
                  <InfoCard.Row className={cn(INFO_ROW_CLASSES)}>
                    <InfoCard.Row.Key>
                      <IncentiveToken
                        className="mb-1"
                        symbolClassName="text-secondary font-normal"
                        token_data={token_data}
                      />

                      <TertiaryLabel className="ml-5">
                        Underlying Rate(s)
                      </TertiaryLabel>
                    </InfoCard.Row.Key>

                    <InfoCard.Row.Value>
                      <IncentiveTokenDetails
                        token_data={token_data}
                        category={"underlying_native"}
                        labelClassName="text-secondary"
                      />
                    </InfoCard.Row.Value>
                  </InfoCard.Row>
                </SlideUpWrapper>
              );
            })}
          </InfoCard>
        )}
      </div>
    );
  }
});