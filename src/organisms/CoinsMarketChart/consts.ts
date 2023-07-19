import { CoinMarketChartDataMapperType } from "@/organisms/CoinsMarketChart/types.ts";

export const ConstCoinsMarketChartDataMapper: CoinMarketChartDataMapperType = {
  prices: {
    label: "Prices",
    colors: {
      fill: "rgba(205,180,219,0.5)",
      stroke: "#cdb4db",
    },
  },
  total_volumes: {
    label: "Total Volumes",
    colors: {
      fill: "rgba(162,210,255,0.5)",
      stroke: "#a2d2ff",
    },
  },
  market_caps: {
    label: "Market Caps",
    colors: {
      fill: "rgba(255,175,204,0.5)",
      stroke: "#ffafcc",
    },
  },
};
