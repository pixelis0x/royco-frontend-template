"use client";

import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import { cn } from "@/lib/utils";
import { RoyaltyForm } from "../royalty-form";
import { useUsername, useUserPosition } from "royco/hooks";
import { useAccount } from "wagmi";
import { useImmer } from "use-immer";
import { isEqual } from "lodash";
import { produce } from "immer";
import { LoadingSpinner, SpringNumber } from "@/components/composables";
import { Button } from "@/components/ui/button";
import { useConnectWallet } from "@/app/_components/provider/connect-wallet-provider";
import { useGlobalStates, useJoin } from "@/store";
import { SignInButton } from "../sign-in-button/sign-in-button";
import { UseFormReturn } from "react-hook-form";
import { RoyaltyFormSchema } from "../royalty-form/royality-form-schema";
import { z } from "zod";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { useUserInfo } from "@/components/user/hooks";

export const Cta = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    royaltyForm: UseFormReturn<z.infer<typeof RoyaltyFormSchema>>;
  }
>(({ className, royaltyForm, ...props }, ref) => {
  const { address: account_address, isConnected } = useAccount();

  const [proof, setProof] = useLocalStorage("proof", null);

  const { data: userInfo } = useUserInfo({
    account_address: account_address?.toLowerCase(),
    proof: proof,
  });

  const { openRoyaltyForm } = useJoin();

  const propsUseUsername = useUsername({
    account_address: account_address?.toLowerCase(),
  });

  const { connectWalletModal } = useConnectWallet();

  const [placeholderUserPosition, setPlaceholderUserPosition] = useImmer<
    Array<number | null | undefined>
  >([null, null]);

  const propsUserPosition = useUserPosition({
    account_address: account_address?.toLowerCase(),
  });

  useEffect(() => {
    if (
      propsUserPosition.isLoading === false &&
      propsUserPosition.isRefetching === false &&
      !isEqual(propsUserPosition.data, placeholderUserPosition[1])
    ) {
      setPlaceholderUserPosition((prevDatas) => {
        return produce(prevDatas, (draft) => {
          // Prevent overwriting previous data with the same object reference
          if (!isEqual(draft[1], propsUserPosition.data)) {
            draft[0] = draft[1] as typeof propsUserPosition.data; // Set previous data to the current data
            draft[1] = propsUserPosition.data as typeof propsUserPosition.data; // Set current data to the new data
          }
        });
      });
    }
  }, [
    propsUserPosition.isLoading,
    propsUserPosition.isRefetching,
    propsUserPosition.data,
  ]);

  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "flex w-full flex-col items-center justify-center px-5 py-16",
        className
      )}
    >
      <h3 className="flex flex-row items-center text-center font-gt text-3xl font-normal sm:text-[40px]">
        {!!placeholderUserPosition[1] ? (
          <Fragment>
            Position: #
            <SpringNumber
              previousValue={placeholderUserPosition[0] ?? 0}
              currentValue={placeholderUserPosition[1] ?? 0}
              numberFormatOptions={{
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }}
            />
          </Fragment>
        ) : (
          "Join the Royalty."
        )}
      </h3>
      <div className="my-5 w-full max-w-[400px] text-center font-gt text-base font-light text-secondary">
        Get priority access & benefits based on your wallets. Connect more
        assets to get in first.
      </div>
      <RoyaltyForm royaltyForm={royaltyForm} />
      <img
        className={cn(userInfo ? "mt-0" : "mt-10")}
        src="/join/partners.png"
        alt="Partners"
        width={180}
        height={20}
      />

      <div className="mt-3 w-full max-w-[409px] text-center font-gt text-sm font-light text-secondary">
        Join DCF God, Sam K, Smokey the Bera, and more.
      </div>
    </div>
  );
});
