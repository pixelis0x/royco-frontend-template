import { useQuery } from "@tanstack/react-query";
import { getMarketOffersQueryOptions } from "../queries";
import { RoycoClient, useRoycoClient } from "../client";

export const useMarketOffers = ({
  chain_id,
  market_type,
  market_id,
  offer_side,
  quantity,
  enabled = true,
}: {
  chain_id: number;
  market_type: number;
  market_id: string;
  offer_side: number;
  quantity: string;
  enabled?: boolean;
}) => {
  const client: RoycoClient = useRoycoClient();

  return useQuery({
    ...getMarketOffersQueryOptions(
      client,
      chain_id,
      market_type,
      market_id,
      offer_side,
      quantity
    ),
    enabled,
  });
};
