"use client";

import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/composables";
import {
  type TypedArrayDistinctIncentive,
  useDistinctIncentives,
} from "royco/hooks";
import { FilterWrapper } from "../composables";
import { AlertIndicator } from "@/components/common";
import { getSupportedChain } from "royco/utils";
import { getFrontendTag } from "@/store";

export const IncentivesFilter = () => {
  const { data, isLoading, isError } = useDistinctIncentives();

  const tokens = !!data
    ? (data as TypedArrayDistinctIncentive[]).filter((token) => {
        const frontendTag =
          typeof window !== "undefined" ? getFrontendTag() : "default";

        // if (frontendTag === "testnet") {
        //   return token.ids.every((id) => {
        //     const [chain_id] = id.split("-");
        //     const chain = getSupportedChain(parseInt(chain_id));
        //     return chain?.id === 11155111;
        //   });
        // } else
        if (frontendTag !== "dev") {
          return !token.ids.every((id) => {
            const [chain_id] = id.split("-");
            const chain = getSupportedChain(parseInt(chain_id));
            return chain?.testnet === true;
          });
        } else {
          return true;
        }
      })
    : [];

  if (isLoading)
    return (
      <div className="flex w-full flex-col place-content-center items-center">
        <LoadingSpinner className="h-5 w-5" />
      </div>
    );

  if (!isLoading && tokens.length === 0) {
    return <AlertIndicator className="py-2">No tokens yet</AlertIndicator>;
  }

  if (data) {
    return (
      <Fragment>
        {tokens.map((token, index) => {
          if (!!token.symbol && !!token.image && !!token.ids) {
            return (
              <div key={`filter-wrapper:incentives:${token.symbol}`}>
                <FilterWrapper
                  filter={{
                    id: "incentive_ids",
                    value: token.symbol,
                    matches: token.ids,
                  }}
                  token={{
                    image: token.image,
                    symbol: token.symbol,
                    ids: token.ids,
                  }}
                />
              </div>
            );
          }
        })}
      </Fragment>
    );
  }
};
