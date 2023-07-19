import { Coingecko } from "@/app/providers/coingecko/types.ts";
import { useEndpoints } from "@/app/providers/coingecko/endpoints";

export function useCoingecko(): Coingecko {
  return useEndpoints();
}
