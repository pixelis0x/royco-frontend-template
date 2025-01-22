import React from "react";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { MarketActionFormSchema } from "../../../../market-action-form-schema";
import { InputAmountWrapper } from "../../components/input-amount-wrapper";
import { IPQuantityIndicator } from "../../../composables";
import { SlideUpWrapper } from "@/components/animations";

export const IPMarketActionForm = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    marketActionForm: UseFormReturn<z.infer<typeof MarketActionFormSchema>>;
  }
>(({ className, marketActionForm, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("", className)} {...props}>
      <div ref={ref} className={cn(className)} {...props}>
        {/**
         * Quantity Selector for IP
         */}
        <SlideUpWrapper
          layout="position"
          layoutId="motion:market:supply-action:input-amount-wrapper"
          delay={0.1}
        >
          <InputAmountWrapper marketActionForm={marketActionForm} />
        </SlideUpWrapper>

        {/**
         * Grey Box for IP
         */}
        <IPQuantityIndicator marketActionForm={marketActionForm} />
      </div>
    </div>
  );
});
