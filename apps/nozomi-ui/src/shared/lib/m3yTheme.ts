/**
 * @file Generates Material 3 You theme.
 * @author LegenLee <lsko1332@naver.com>
 */

import {
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";

/**
 * Generates color theme from the rgba color string.
 * @param rgba Hex string of the rgba color
 */
export function generateThemeFromRGBA(rgba: string) {
  return themeFromSourceColor(argbFromHex(rgba));
}
