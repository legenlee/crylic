import type { ExposedBridge } from "@nozomi/main/api";

declare const window: Window & {
  nozomi: ExposedBridge;
};

export const ping = () => window.nozomi.ping();
