"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { MarketBuilderFormSchema } from "../market-builder-form";
import { useMarketBuilderManager } from "@/store";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketBuilderSteps } from "@/store";
import { MorphMotion } from "@/components/animations";
import { MotionWrapper } from "../market-builder-flow/animations";

export const TopNavigator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    marketBuilderForm: UseFormReturn<z.infer<typeof MarketBuilderFormSchema>>;
  }
>(({ className, marketBuilderForm, ...props }, ref) => {
  const { activeStep, setActiveStep, setForceClose } =
    useMarketBuilderManager();
  const activeTitle = MarketBuilderSteps[activeStep].title;

  const handlePrevStep = () => {
    if (activeStep === MarketBuilderSteps.info.id) {
      return;
    } else if (activeStep === MarketBuilderSteps.actions.id) {
      setActiveStep(MarketBuilderSteps.info.id);
    } else if (activeStep === MarketBuilderSteps.params.id) {
      setActiveStep(MarketBuilderSteps.actions.id);
    } else if (activeStep === MarketBuilderSteps.vault.id) {
      setActiveStep(MarketBuilderSteps.info.id);
    } else if (activeStep === MarketBuilderSteps.review.id) {
      if (marketBuilderForm.watch("action_type") === "recipe") {
        setActiveStep(MarketBuilderSteps.params.id);
      } else {
        setActiveStep(MarketBuilderSteps.vault.id);
      }
    }
  };

  return (
    <div
      ref={ref}
      className={cn("flex w-full flex-col items-center gap-12", className)}
      {...props}
    >
      <Button
        onClick={() => handlePrevStep()}
        disabled={activeStep === MarketBuilderSteps.info.id}
        className={cn(
          "flex w-fit cursor-pointer flex-col place-content-start items-start self-start bg-transparent p-0 text-tertiary transition-all duration-200 ease-in-out hover:text-secondary"
        )}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </Button>

      <div className="w-full">
        {/* <MorphMotion.Container
          id={`offer-form:title:active-step:${activeStep}:container`}
          className="heading-3 flex-wrap text-primary"
        >
          <MorphMotion.Text
            id={`offer-form:title:active-step:${activeStep}:text`}
          >
            {activeTitle}
          </MorphMotion.Text>
        </MorphMotion.Container> */}

        <MotionWrapper
          key={`top-navigator:${activeStep}:title`}
          className="heading-3 flex-wrap text-primary"
        >
          {activeTitle}
        </MotionWrapper>

        {activeStep === MarketBuilderSteps.review.id && (
          <MotionWrapper>
            <div className="body-1 mt-3 text-secondary">
              Please review the following details as Royco markets are
              immutable.
            </div>
          </MotionWrapper>
        )}
      </div>
    </div>
  );
});
