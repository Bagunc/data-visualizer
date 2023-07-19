import { App } from "vue";

import StoreProvider from "@/app/providers/store/StoreProvider.js";
import CoingeckoProvider from "@/app/providers/coingecko/CoingeckoProvider.ts";

export function RegisterProviders(app: App): App {
  app.use(StoreProvider);
  app.use(CoingeckoProvider);

  return app;
}
