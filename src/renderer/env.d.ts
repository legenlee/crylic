export {};

declare global {
  // WTF? This event name is too long.
  interface WindowControlsOverlayGeometryChangeEvent extends Event {
    readonly visible: boolean;
    readonly titlebarAreaRect: DOMRect;
  }

  interface WindowControlsOverlay extends EventTarget {
    readonly visible: boolean;
    getTitlebarAreaRect(): DOMRect;
    ongeometrychange:
      | ((
          this: WindowControlsOverlay,
          ev: WindowControlsOverlayGeometryChangeEvent,
        ) => any)
      | null;
    addEventListener(
      type: "geometrychange",
      listener: (
        this: WindowControlsOverlay,
        ev: WindowControlsOverlayGeometryChangeEvent,
      ) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener(
      type: "geometrychange",
      listener: (
        this: WindowControlsOverlay,
        ev: WindowControlsOverlayGeometryChangeEvent,
      ) => any,
      options?: boolean | EventListenerOptions,
    ): void;
  }

  interface Navigator {
    readonly windowControlsOverlay?: WindowControlsOverlay;
  }
}
