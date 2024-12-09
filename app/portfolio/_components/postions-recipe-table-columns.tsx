import { cn } from "@/lib/utils";
import { TokenDisplayer } from "@/components/common";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { EnrichedPositionsRecipeDataType } from "royco/queries";

import { formatDistanceToNow } from "date-fns";
import { MarketType, RewardStyleMap } from "@/store";
import {
  BASE_UNDERLINE,
  SecondaryLabel,
} from "../../market/[chain_id]/[market_type]/[market_id]/_components/composables";
import { getSupportedChain } from "royco/utils";
import Link from "next/link";

/**
 * @description Column definitions for the table
 * @note For cell formatting @see {@link https://tanstack.com/table/v8/docs/guide/column-defs}
 */
/**
 * @TODO Strictly type this
 */
// @ts-ignore
export const positionsRecipeColumns: ColumnDef<EnrichedPositionsRecipeDataType> =
  [
    {
      accessorKey: "name",
      enableResizing: false,
      enableSorting: false,
      header: "Title",
      meta: {
        className: "min-w-32 w-80",
      },
      cell: (props: any) => {
        return (
          <Link
            href={`/market/${props.row.original.chain_id}/${MarketType.recipe.id}/${props.row.original.market_id}`}
          >
            <div
              className={cn(
                "flex flex-col items-start gap-[0.2rem] font-gt text-sm font-300"
              )}
            >
              <SecondaryLabel className="text-black">
                {props.row.original.name || "Unknown market"}
              </SecondaryLabel>

              <SecondaryLabel className="text-tertiary">
                {getSupportedChain(props.row.original.chain_id)?.name ||
                  "Unknown Chain"}
              </SecondaryLabel>
            </div>
          </Link>
        );
      },
    },
    {
      accessorKey: "annual_change_ratio",
      enableResizing: false,
      enableSorting: false,
      header: "APR",
      meta: {
        className: "min-w-24",
      },
      cell: (props: any) => {
        return (
          <div
            className={cn(
              "flex flex-col items-start gap-[0.2rem] font-gt text-sm font-300"
            )}
          >
            <SecondaryLabel className="text-black">
              {Intl.NumberFormat("en-US", {
                style: "percent",
                notation: "compact",
                useGrouping: true,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(props.row.original.annual_change_ratio)}
            </SecondaryLabel>
          </div>
        );
      },
    },
    {
      accessorKey: "reward_style",
      enableResizing: false,
      enableSorting: false,
      header: "Incentive Payout",
      meta: {
        className: "min-w-32 w-52",
      },
      cell: (props: any) => {
        const unlockDate = new Date(
          parseInt(props.row.original.unlock_timestamp) * 1000
        );
        const currentDate = new Date();

        let isOpenToClaim = false;
        let isAlreadyClaimed = false;

        if (props.row.original.reward_style === 0) {
          isOpenToClaim = true;
        } else if (unlockDate < currentDate) {
          isOpenToClaim = true;
        }

        if (
          props.row.original.is_claimed.every(
            (claim: boolean) => claim === true
          )
        ) {
          isAlreadyClaimed = true;
        }

        let text = "";

        if (props.row.original.is_forfeited === true) {
          text = "Forfeited";
        } else if (isAlreadyClaimed) {
          if (props.row.original.offer_side === 0) {
            text = "Already claimed";
          } else {
            text = "Already paid";
          }
        } else if (isOpenToClaim) {
          text = "Open for claims";
        } else {
          text = formatDistanceToNow(
            new Date(parseInt(props.row.original.unlock_timestamp) * 1000),
            {
              addSuffix: true,
            }
          );
        }

        return (
          <div
            className={cn(
              "flex flex-col items-start gap-[0.2rem] font-gt text-sm font-300"
            )}
          >
            <SecondaryLabel className="text-black">
              {RewardStyleMap[props.row.original.reward_style].label}
            </SecondaryLabel>

            <SecondaryLabel className="text-tertiary">{text}</SecondaryLabel>
          </div>
        );
      },
    },
    {
      accessorKey: "tokens_data",
      enableResizing: false,
      enableSorting: false,
      header: "Incentives",
      meta: {
        className: "min-w-36",
      },
      cell: (props: any) => {
        return (
          <div
            className={cn(
              "flex flex-col gap-[0.2rem] pr-3 font-gt text-sm font-300"
            )}
          >
            {props.row.original.tokens_data.length === 0 && (
              <div className="flex items-center space-x-2">None</div>
            )}

            {props.row.original.tokens_data.map(
              (
                // @ts-ignore
                token,
                // @ts-ignore
                tokenIndex
              ) => {
                return (
                  <div key={tokenIndex} className="flex items-center space-x-2">
                    <div className="h-4">
                      <span className="leading-5">
                        {Intl.NumberFormat("en-US", {
                          style: "decimal",
                          notation: "standard",
                          useGrouping: true,
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 8,
                        }).format(token.token_amount)}
                      </span>
                    </div>

                    <TokenDisplayer size={4} tokens={[token]} symbols={true} />
                  </div>
                );
              }
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "input_token_data",
      enableResizing: false,
      enableSorting: false,
      header: "Cost",
      meta: {
        className: "min-w-32 w-64",
      },
      cell: (props: any) => {
        let costText = null;

        const unlockDate = new Date(
          parseInt(props.row.original.unlock_timestamp) * 1000
        );

        if (props.row.original.offer_side === 0) {
          if (props.row.original.is_withdrawn === true) {
            costText = "Withdrawn";
          } else if (unlockDate < new Date()) {
            costText = "Can Withdraw";
          } else {
            costText = "Locked";
          }
        }

        return (
          <div
            className={cn(
              "flex flex-col items-start gap-[0.2rem] font-gt text-sm font-300"
            )}
          >
            <SecondaryLabel className="text-black">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                notation: "standard",
                useGrouping: true,
                minimumFractionDigits: 2,
                maximumFractionDigits: 8,
              }).format(props.row.original.input_token_data.token_amount_usd)}
            </SecondaryLabel>

            <div className="flex flex-row items-center space-x-2">
              <SecondaryLabel className="text-tertiary">
                {Intl.NumberFormat("en-US", {
                  style: "decimal",
                  notation: "standard",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 8,
                }).format(
                  props.row.original.input_token_data.token_amount
                )}{" "}
                {props.row.original.input_token_data.symbol.toUpperCase()}
              </SecondaryLabel>

              {costText && (
                <SecondaryLabel
                  className={cn("text-tertiary", BASE_UNDERLINE.SM)}
                >
                  {costText}
                </SecondaryLabel>
              )}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "unlock_timestamp",
      enableResizing: false,
      enableSorting: false,
      header: "Input Token",
      meta: {
        className: "min-w-32",
      },
      cell: (props: any) => {
        let text = "";

        let unlockDate = new Date(
          parseInt(props.row.original.unlock_timestamp) * 1000
        );

        let currentDate = new Date();

        if (props.row.original.is_withdrawn === true) {
          if (props.row.original.offer_side === 0) {
            text = "Already Withdrawn";
          } else {
            text = "Already Paid";
          }
        } else if (
          props.row.original.is_forfeited === true ||
          unlockDate < currentDate
        ) {
          if (props.row.original.offer_side === 0) {
            text = "Open for Withdrawal";
          } else {
            text = "To be Paid";
          }
        } else {
          if (props.row.original.offer_side === 0) {
            text = `Withdrawal ${formatDistanceToNow(
              new Date(parseInt(props.row.original.unlock_timestamp) * 1000),
              {
                addSuffix: true,
              }
            )}`;
          } else {
            text = `Pay ${formatDistanceToNow(
              new Date(parseInt(props.row.original.unlock_timestamp) * 1000),
              {
                addSuffix: true,
              }
            )}`;
          }
        }

        return <div className={cn("font-gt text-sm font-300")}>{text}</div>;
      },
    },
    {
      accessorKey: "token_amounts",
      enableResizing: false,
      enableSorting: false,
      header: "Unclaimed Incentives",
      meta: {
        className: "min-w-48 w-64",
      },
      cell: (props: any) => {
        let unclaimed_incentives_usd = 0;

        for (let i = 0; i < props.row.original.tokens_data.length; i++) {
          if (props.row.original.is_claimed[i] === false) {
            unclaimed_incentives_usd +=
              props.row.original.tokens_data[i].token_amount_usd;
          }
        }

        if (props.row.original.offer_side === 1) {
          return (
            <div
              className={cn(
                "flex flex-col items-start gap-[0.2rem] font-gt text-sm font-300"
              )}
            >
              Not Applicable
            </div>
          );
        } else {
          return (
            <div
              className={cn(
                "flex flex-col items-start gap-[0.2rem] font-gt text-sm font-300"
              )}
            >
              <SecondaryLabel className="text-black">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  notation: "standard",
                  useGrouping: true,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 8,
                }).format(unclaimed_incentives_usd)}
              </SecondaryLabel>

              <div className="flex flex-col gap-1">
                {props.row.original.tokens_data.map(
                  (token: any, tokenIndex: number) => {
                    const isClaimed = props.row.original.is_claimed[tokenIndex];

                    let claimText = isClaimed ? "Claimed" : "Can Claim";

                    const unlockDate = new Date(
                      parseInt(props.row.original.unlock_timestamp) * 1000
                    );

                    if (isClaimed === false && unlockDate > new Date()) {
                      claimText = "Locked";
                    }

                    return (
                      <div className="flex flex-row items-center space-x-2">
                        <SecondaryLabel className="text-tertiary">
                          {Intl.NumberFormat("en-US", {
                            style: "decimal",
                            notation: "standard",
                            useGrouping: true,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8,
                          }).format(token.token_amount)}{" "}
                          {token.symbol.toUpperCase()}
                        </SecondaryLabel>

                        <SecondaryLabel
                          className={cn(
                            "text-tertiary decoration-transparent",
                            BASE_UNDERLINE.SM
                          )}
                        >
                          {claimText}
                        </SecondaryLabel>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        }
      },
    },
    {
      accessorKey: "input_token_id",
      enableResizing: false,
      enableSorting: false,
      header: "Market Value",
      meta: {
        className: "min-w-32",
      },
      cell: (props: any) => {
        const input_token_value =
          props.row.original.input_token_data.token_amount_usd;

        const tokens_value = props.row.original.tokens_data.reduce(
          (acc: number, token: any) => acc + token.token_amount_usd,
          0
        );

        const market_value = input_token_value + tokens_value;

        return (
          <div
            className={cn(
              "flex flex-col items-start gap-[0.2rem] font-gt text-sm font-300"
            )}
          >
            <SecondaryLabel className="text-black">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                notation: "standard",
                useGrouping: true,
                minimumFractionDigits: 2,
                maximumFractionDigits: 8,
              }).format(market_value)}
            </SecondaryLabel>
          </div>
        );
      },
    },
  ];
