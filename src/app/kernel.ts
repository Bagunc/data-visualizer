import { App, createApp } from "vue";

import { RegisterProviders } from "@/app/providers";

import Entrypoint from "@/app/EntryPoint.vue";

import "@/app/assets/scss/index.scss";

export function Kernel(rootContainer: Element | string = "#app"): void {
  const app: App<Element> = createApp(Entrypoint);

  RegisterProviders(app);

  app.mount(rootContainer);
}
