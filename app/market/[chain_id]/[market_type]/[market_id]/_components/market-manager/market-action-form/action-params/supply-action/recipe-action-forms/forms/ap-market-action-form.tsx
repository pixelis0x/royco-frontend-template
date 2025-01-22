import React from "react";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { MarketActionFormSchema } from "../../../../market-action-form-schema";
import { FundingSourceSelector } from "../../components/funding-source-selector";
import { InputAmountWrapper } from "../../components/input-amount-wrapper";
import { SlideUpWrapper } from "@/components/animations";
import { useMarketManager } from "@/store/use-market-manager";

export const APMarketActionForm = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    marketActionForm: UseFormReturn<z.infer<typeof MarketActionFormSchema>>;
  }
>(({ className, marketActionForm, ...props }, ref) => {
  const { viewType } = useMarketManager();

  return (
    <div ref={ref} className={cn("", className)} {...props}>
      {/**
       * Funding Source Selector
       */}
      <SlideUpWrapper
        layout="position"
        layoutId={`motion:market:recipe:ap-market:funding-source-selector:${viewType}`}
        delay={0.1}
      >
        <FundingSourceSelector
          fundingVaultAddress={marketActionForm.watch("funding_vault") || ""}
          onSelectFundingVaultAddress={(value) => {
            marketActionForm.setValue("funding_vault", value);
          }}
        />
      </SlideUpWrapper>

      {/**
       * Input Amount
       */}
      <div className="mt-3">
        <SlideUpWrapper
          layout="position"
          layoutId={`motion:market:recipe:ap-market:input-amount-wrapper:${viewType}`}
          delay={0.2}
        >
          <InputAmountWrapper marketActionForm={marketActionForm} />
        </SlideUpWrapper>
      </div>
    </div>
  );
});
