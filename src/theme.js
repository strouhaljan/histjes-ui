
import { createTheme, loadTheme } from "@fluentui/react";

export const theme = createTheme({
    palette: {
      themePrimary: "#222256",
      themeLighterAlt: "#f3f3fa",
      themeLighter: "#d2d2e9",
      themeLight: "#afafd6",
      themeTertiary: "#6d6dae",
      themeSecondary: "#3e3e88",
      themeDarkAlt: "#29296c",
      themeDark: "#23235b",
      themeDarker: "#1a1a43",
      neutralLighterAlt: "#faf9f8",
      neutralLighter: "#f3f2f1",
      neutralLight: "#edebe9",
      neutralQuaternaryAlt: "#e1dfdd",
      neutralQuaternary: "#d0d0d0",
      neutralTertiaryAlt: "#c8c6c4",
      neutralTertiary: "#a19f9d",
      neutralSecondary: "#605e5c",
      neutralPrimaryAlt: "#3b3a39",
      neutralPrimary: "#323130",
      neutralDark: "#201f1e",
      black: "#000000",
      white: "#ffffff",
    },
});

loadTheme(theme);
