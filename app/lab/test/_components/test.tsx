"use client";

import { RPC_API_KEYS } from "@/components/constants";
import { Abi, Address, http } from "viem";
import { Button } from "@/components/ui/button";
import { getSupportedChain } from "@/sdk/utils/get-supported-chain";
import { createPublicClient } from "viem";
import { ContractMap } from "@/sdk/contracts";

export const Test = () => {
  const testFunction = async () => {
    try {
      // Fetch the custom APY from your API
      const custom_apy_res = await fetch(
        "https://api-v1.bakerfi.xyz/api/vaults/8453/mille-feuille/yield"
      );

      // Parse the response as JSON
      const custom_apy_data = await custom_apy_res.json();

      // Extract the underlying yield from the custom APY data & perform calculations, if needed and then update the underlying_annual_change_ratio
      const new_underlying_annual_change_ratio =
        (Number(custom_apy_data["yield"]) ?? 0) / 100;

      console.log(
        "new_underlying_annual_change_ratio",
        new_underlying_annual_change_ratio
      );

      // const chainClient = createPublicClient({
      //   batch: {
      //     multicall: true,
      //   },
      //   chain: getSupportedChain(1),
      //   transport: http(RPC_API_KEYS[1]),
      // });

      // const contracts = [
      //   {
      //     address: "0x887d57a509070a0843c6418eb5cffc090dcbbe95" as Address,
      //     abi: ContractMap[1 as keyof typeof ContractMap]["WrappedVault"]
      //       .abi as Abi,
      //     functionName: "rewardToInterval",
      //     args: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as Address],
      //   },
      // ];

      // const query = await chainClient.multicall({ contracts });

      // console.log("query", query);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={testFunction}>Click Me</Button>
    </div>
  );
};