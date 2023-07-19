import { CoingeckoCoinsMarketChart } from "@/app/providers/coingecko/endpoints/list/coins/types.ts";

export type CoinMarketChartDataMapperType = {
  [key in keyof CoingeckoCoinsMarketChart]: {
    label: string;
    colors?: {
      fill?: string;
      stroke?: string;
    };
  };
};
