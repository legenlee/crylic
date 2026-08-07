/**
 * @file Generates Material 3 You theme.
 * @author LegenLee <lsko1332@naver.com>
 */

import {
  argbFromHex,
  DynamicColor,
  DynamicScheme,
  Hct,
  hexFromArgb,
  MaterialDynamicColors,
  SchemeTonalSpot,
  themeFromSourceColor,
  type CustomColor,
  type CustomColorGroup,
} from "@material/material-color-utilities";

// Useful MD2 color tokens.
const MD2_COLOR_TOKENS = [
  { name: "success", value: argbFromHex("#2e6c3f"), blend: true },
  { name: "warning", value: argbFromHex("#7a5900"), blend: true },
  { name: "info", value: argbFromHex("#0b57d0"), blend: true },
] as const satisfies CustomColor[];

// Hardcoded with essential MD3 color token keys with some MD2 color token keys.
// Idk this is best thing, someone please let me know better than this.
type ColorTokenKeys =
  | "primary"
  | "on-primary"
  | "primary-container"
  | "on-primary-container"
  | "secondary"
  | "on-secondary"
  | "secondary-container"
  | "on-secondary-container"
  | "tertiary"
  | "on-tertiary"
  | "tertiary-container"
  | "on-tertiary-container"
  | "error"
  | "on-error"
  | "error-container"
  | "on-error-container"
  | "background"
  | "on-background"
  | "surface"
  | "on-surface"
  | "surface-container-lowest"
  | "on-surface-container-lowest"
  | "surface-container-low"
  | "on-surface-container-low"
  | "surface-container"
  | "on-surface-container"
  | "surface-container-high"
  | "on-surface-container-high"
  | "surface-container-highest"
  | "on-surface-container-highest"
  | "surface-variant"
  | "on-surface-variant"
  | "surface-bright"
  | "on-surface-bright"
  | "surface-dim"
  | "on-surface-dim"
  | "surface-tint"
  | "inverse-surface"
  // Note: This is "inverse-on-surface" of the MD3 original token. Changed this key for Vuetify 4 auto mapping.
  | "on-inverse-surface"
  | "outline"
  | "outline-variant"
  | "success"
  | "on-success"
  | "success-container"
  | "on-success-container"
  | "warning"
  | "on-warning"
  | "warning-container"
  | "on-warning-container"
  | "info"
  | "on-info"
  | "info-container"
  | "on-info-container";

const dynamic = new MaterialDynamicColors();

function getColor(color: DynamicColor, scheme: DynamicScheme) {
  return hexFromArgb(color.getArgb(scheme));
}

function getCustomColor(
  name: (typeof MD2_COLOR_TOKENS)[number]["name"],
  role: "color" | "onColor" | "colorContainer" | "onColorContainer",
  scheme: DynamicScheme,
  customColors: CustomColorGroup[],
) {
  const group = customColors.find(
    (customColor) => customColor.color.name === name,
  );

  if (!group) {
    throw new Error(
      `Expected existing name from MD2_COLOR_TOKENS, but provided name: ${name}`,
    );
  }

  return hexFromArgb((scheme.isDark ? group.dark : group.light)[role]);
}

function createColorPalette(
  scheme: DynamicScheme,
  customColors: CustomColorGroup[],
) {
  const onSurface = getColor(dynamic.onSurface(), scheme);

  // Disabled prettier to prevent auto wrap. Wrapping makes code ugly.
  // prettier-ignore
  return {
    primary: getColor(dynamic.primary(), scheme),
    "on-primary": getColor(dynamic.onPrimary(), scheme),
    "primary-container": getColor(dynamic.primaryContainer(), scheme),
    "on-primary-container": getColor(dynamic.onPrimaryContainer(), scheme),

    secondary: getColor(dynamic.secondary(), scheme),
    "on-secondary": getColor(dynamic.onSecondary(), scheme),
    "secondary-container": getColor(dynamic.secondaryContainer(), scheme),
    "on-secondary-container": getColor(dynamic.onSecondaryContainer(), scheme),

    tertiary: getColor(dynamic.tertiary(), scheme),
    "on-tertiary": getColor(dynamic.onTertiary(), scheme),
    "tertiary-container": getColor(dynamic.tertiaryContainer(), scheme),
    "on-tertiary-container": getColor(dynamic.onTertiaryContainer(), scheme),

    error: getColor(dynamic.error(), scheme),
    "on-error": getColor(dynamic.onError(), scheme),
    "error-container": getColor(dynamic.errorContainer(), scheme),
    "on-error-container": getColor(dynamic.onErrorContainer(), scheme),

    background: getColor(dynamic.background(), scheme),
    "on-background": getColor(dynamic.onBackground(), scheme),

    surface: getColor(dynamic.surface(), scheme),
    "on-surface": onSurface,

    "surface-container-lowest": getColor(dynamic.surfaceContainerLowest(), scheme),
    "on-surface-container-lowest": onSurface,
    
    "surface-container-low": getColor(dynamic.surfaceContainerLow(), scheme),
    "on-surface-container-low": onSurface,
    
    "surface-container": getColor(dynamic.surfaceContainer(), scheme),
    "on-surface-container": onSurface,
    
    "surface-container-high": getColor(dynamic.surfaceContainerHigh(), scheme),
    "on-surface-container-high": onSurface,
    
    "surface-container-highest": getColor(dynamic.surfaceContainerHighest(), scheme),
    "on-surface-container-highest": onSurface,

    "surface-variant": getColor(dynamic.surfaceVariant(), scheme),
    "on-surface-variant": getColor(dynamic.onSurfaceVariant(), scheme),

    "surface-bright": getColor(dynamic.surfaceBright(), scheme),
    "on-surface-bright": onSurface,

    "surface-dim": getColor(dynamic.surfaceDim(), scheme),
    "on-surface-dim": onSurface,

    "surface-tint": getColor(dynamic.surfaceTint(), scheme),

    "inverse-surface": getColor(dynamic.inverseSurface(), scheme),
    "on-inverse-surface": getColor(dynamic.inverseOnSurface(), scheme),

    outline: getColor(dynamic.outline(), scheme),
    "outline-variant": getColor(dynamic.outlineVariant(), scheme),

    success: getCustomColor("success", "color", scheme, customColors),
    "on-success": getCustomColor("success", "onColor", scheme, customColors),
    "success-container": getCustomColor("success", "colorContainer", scheme, customColors),
    "on-success-container": getCustomColor("success", "onColorContainer", scheme, customColors),

    warning: getCustomColor("warning", "color", scheme, customColors),
    "on-warning": getCustomColor("warning", "onColor", scheme, customColors),
    "warning-container": getCustomColor("warning", "colorContainer", scheme, customColors),
    "on-warning-container": getCustomColor("warning", "onColorContainer", scheme, customColors),

    info: getCustomColor("info", "color", scheme, customColors),
    "on-info": getCustomColor("info", "onColor", scheme, customColors),
    "info-container": getCustomColor("info", "colorContainer", scheme, customColors),
    "on-info-container": getCustomColor("info", "onColorContainer", scheme, customColors),
  } satisfies Record<ColorTokenKeys, string>;
}

/**
 * Generate and returns color theme from the rgb color string.
 * @param rgb Hex string of the rgb color. ex: #a254c1, #a6c
 */
export function generatePaletteFromRGB(rgb: string) {
  if (!rgb.startsWith("#")) {
    throw new Error("Hex color string must be started with # character.");
  } else if (rgb.length !== 4 && rgb.length !== 7) {
    throw new Error(
      "Hex color string must be 4 or 7 characters. No alpha supports.",
    );
  }

  const seed = argbFromHex(rgb);
  const customColors = themeFromSourceColor(
    seed,
    MD2_COLOR_TOKENS,
  ).customColors;

  const lightScheme = new SchemeTonalSpot(Hct.fromInt(seed), false, 0);
  const darkScheme = new SchemeTonalSpot(Hct.fromInt(seed), true, 0);

  return {
    light: createColorPalette(lightScheme, customColors),
    dark: createColorPalette(darkScheme, customColors),
  };
}
