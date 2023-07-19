import { Plugin, App } from "vue";

import { Coingecko } from "@/app/providers/coingecko/types.ts";
import { useCoingecko } from "@/app/providers/coingecko/hooks.ts";

interface Options {
  updateTimeout: number;
}

export default {
  install(app: App): void {
    const cGecko: Coingecko = useCoingecko();

    app.provide("cGecko", cGecko);
    app.config.globalProperties.$cGecko = cGecko;
  },
} as Plugin<Options>;
