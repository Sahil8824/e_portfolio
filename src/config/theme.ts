// ============================================================
// src/config/theme.ts
// ------------------------------------------------------------
// HOW TO CHANGE THE ACCENT COLOR:
// 1. Update the hex values below.
// 2. Update the matching `accent` values in tailwind.config.ts
//    (colors.accent.DEFAULT / light / dark) to the same hex codes.
// That's it — every button, tag, and highlight across the site
// uses this single accent color.
// ============================================================

export const theme = {
  accent: {
    default: "#E3A008", // primary accent (buttons, links, highlights)
    light: "#F5C451", // used in dark mode for extra contrast
    dark: "#B67D02", // used in light mode for extra contrast
  },
  meta: {
    // Shown in the browser tab bar color on supporting mobile browsers
    themeColorDark: "#12141A",
    themeColorLight: "#F5F7FA",
  },
};
