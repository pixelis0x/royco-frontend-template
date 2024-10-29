"use client";

import {
  RoycoMarketOfferType,
  RoycoMarketType,
  RoycoMarketUserType,
  TypedRoycoMarketOfferType,
  TypedRoycoMarketType,
  TypedRoycoMarketUserType,
  TypedRoycoMarketVaultIncentiveAction,
} from "@/sdk/market";

import { useRecipeAPMarketOffer } from "./use-recipe-ap-market-offer";
import { useRecipeIPMarketOffer } from "./use-recipe-ip-market-offer";
import { useRecipeAPLimitOffer } from "./use-recipe-ap-limit-offer";
import { useRecipeIPLimitOffer } from "./use-recipe-ip-limit-offer";
import { useVaultAPMarketOffer } from "./use-vault-ap-market-offer";
import { useVaultAPLimitOffer } from "./use-vault-ap-limit-offer";
import { useVaultIPMarketOffer } from "./use-vault-ip-market-offer";
import { useVaultIPLimitOffer } from "./use-vault-ip-limit-offer";
import { useVaultIPAddIncentives } from "./use-vault-ip-add-incentives";
import { MarketVaultIncentiveAction } from "@/store";
import { useVaultIPExtendIncentives } from "./use-vault-ip-extend-incentives";
import { useVaultIPRefundIncentives } from "./use-vault-ip-refund-incentives";

export const PrepareMarketActionType = {
  RecipeAPMarketOffer: `${RoycoMarketType.recipe.id}-${RoycoMarketUserType.ap.id}-${RoycoMarketOfferType.market.id}`,
  RecipeIPMarketOffer: `${RoycoMarketType.recipe.id}-${RoycoMarketUserType.ip.id}-${RoycoMarketOfferType.market.id}`,

  RecipeAPLimitOffer: `${RoycoMarketType.recipe.id}-${RoycoMarketUserType.ap.id}-${RoycoMarketOfferType.limit.id}`,
  RecipeIPLimitOffer: `${RoycoMarketType.recipe.id}-${RoycoMarketUserType.ip.id}-${RoycoMarketOfferType.limit.id}`,

  VaultAPMarketOffer: `${RoycoMarketType.vault.id}-${RoycoMarketUserType.ap.id}-${RoycoMarketOfferType.market.id}`,
  VaultIPMarketOffer: `${RoycoMarketType.vault.id}-${RoycoMarketUserType.ip.id}-${RoycoMarketOfferType.market.id}`,

  VaultAPLimitOffer: `${RoycoMarketType.vault.id}-${RoycoMarketUserType.ap.id}-${RoycoMarketOfferType.limit.id}`,
  VaultIPLimitOffer: `${RoycoMarketType.vault.id}-${RoycoMarketUserType.ip.id}-${RoycoMarketOfferType.limit.id}`,
} as const;

export const usePrepareMarketAction = ({
  chain_id,
  market_id,
  market_type,
  user_type,
  offer_type,
  account,
  quantity,
  funding_vault,
  token_ids,
  token_amounts,
  token_rates,
  expiry,
  start_timestamps,
  end_timestamps,
  custom_token_data,
  vault_incentive_action,
}: {
  chain_id: number;
  market_id: string;
  market_type: TypedRoycoMarketType;
  user_type: TypedRoycoMarketUserType;
  offer_type: TypedRoycoMarketOfferType;
  account: string | undefined;
  quantity: string | undefined;
  funding_vault: string | undefined;
  token_ids: string[] | undefined;
  token_amounts: string[] | undefined;
  token_rates: string[] | undefined;
  expiry: string | undefined;
  start_timestamps: string[] | undefined;
  end_timestamps: string[] | undefined;
  custom_token_data?: Array<{
    token_id: string;
    price?: string;
    fdv?: string;
    total_supply?: string;
  }>;
  vault_incentive_action?: TypedRoycoMarketVaultIncentiveAction;
}) => {
  const action_type = `${market_type}-${user_type}-${offer_type}`;

  const propsRecipeAPMarketOffer = useRecipeAPMarketOffer({
    chain_id,
    market_id,
    account,
    quantity,
    funding_vault,
    custom_token_data,
    enabled: market_type === RoycoMarketType.recipe.id,
  });

  const propsRecipeIPMarketOffer = useRecipeIPMarketOffer({
    chain_id,
    market_id,
    account,
    quantity,
    custom_token_data,
    enabled: market_type === RoycoMarketType.recipe.id,
  });

  const propsRecipeAPLimitOffer = useRecipeAPLimitOffer({
    chain_id,
    market_id,
    account,
    quantity,
    token_ids,
    token_amounts,
    expiry,
    funding_vault,
    custom_token_data,
    enabled: market_type === RoycoMarketType.recipe.id,
  });

  const propsRecipeIPLimitOffer = useRecipeIPLimitOffer({
    chain_id,
    market_id,
    account,
    quantity,
    token_ids,
    token_amounts,
    expiry,
    custom_token_data,
    enabled: market_type === RoycoMarketType.recipe.id,
  });

  const propsVaultAPMarketOffer = useVaultAPMarketOffer({
    chain_id,
    market_id,
    account,
    quantity,
    custom_token_data,
    enabled: market_type === RoycoMarketType.vault.id,
  });

  const propsVaultAPLimitOffer = useVaultAPLimitOffer({
    chain_id,
    market_id,
    account,
    quantity,
    token_ids,
    token_rates,
    expiry,
    funding_vault,
    custom_token_data,
    enabled: market_type === RoycoMarketType.vault.id,
  });

  // const propsVaultIPMarketOffer = useVaultIPMarketOffer({
  //   chain_id,
  //   market_id,
  //   account,
  //   quantity,
  //   custom_token_data,
  //   enabled: market_type === RoycoMarketType.vault.id,
  // });

  // const propsVaultIPLimitOffer = useVaultIPLimitOffer({
  //   chain_id,
  //   market_id,
  //   account,
  //   token_ids,
  //   token_amounts,
  //   start_timestamps,
  //   end_timestamps,
  //   custom_token_data,
  //   enabled: market_type === RoycoMarketType.vault.id,
  // });

  const propsVaultIPAddIncentives = useVaultIPAddIncentives({
    chain_id,
    market_id,
    account,
    token_ids,
    token_amounts,
    start_timestamps,
    end_timestamps,
    custom_token_data,
    enabled:
      market_type === RoycoMarketType.vault.id &&
      !!vault_incentive_action &&
      vault_incentive_action === MarketVaultIncentiveAction.add.id,
  });

  const propsVaultIPExtendIncentives = useVaultIPExtendIncentives({
    chain_id,
    market_id,
    account,
    token_ids,
    token_amounts,
    end_timestamps,
    custom_token_data,
    enabled:
      market_type === RoycoMarketType.vault.id &&
      !!vault_incentive_action &&
      vault_incentive_action === MarketVaultIncentiveAction.extend.id,
  });

  const propsVaultIPRefundIncentives = useVaultIPRefundIncentives({
    chain_id,
    market_id,
    account,
    token_ids,
    custom_token_data,
    enabled:
      market_type === RoycoMarketType.vault.id &&
      !!vault_incentive_action &&
      vault_incentive_action === MarketVaultIncentiveAction.refund.id,
  });

  switch (action_type) {
    case PrepareMarketActionType.RecipeAPMarketOffer:
      return propsRecipeAPMarketOffer;
    case PrepareMarketActionType.RecipeIPMarketOffer:
      return propsRecipeIPMarketOffer;
    case PrepareMarketActionType.RecipeAPLimitOffer:
      return propsRecipeAPLimitOffer;
    case PrepareMarketActionType.RecipeIPLimitOffer:
      return propsRecipeIPLimitOffer;

    case PrepareMarketActionType.VaultAPMarketOffer:
      return propsVaultAPMarketOffer;
    case PrepareMarketActionType.VaultAPLimitOffer:
      return propsVaultAPLimitOffer;

    case PrepareMarketActionType.VaultIPLimitOffer:
      if (
        !!vault_incentive_action &&
        vault_incentive_action === MarketVaultIncentiveAction.add.id
      ) {
        return propsVaultIPAddIncentives;
      }
      if (
        !!vault_incentive_action &&
        vault_incentive_action === MarketVaultIncentiveAction.extend.id
      ) {
        return propsVaultIPExtendIncentives;
      }
      if (
        !!vault_incentive_action &&
        vault_incentive_action === MarketVaultIncentiveAction.refund.id
      ) {
        return propsVaultIPRefundIncentives;
      }
      return propsVaultAPLimitOffer;

    default:
      return propsRecipeAPMarketOffer;
  }
};
