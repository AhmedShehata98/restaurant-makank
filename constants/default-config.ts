type FontType = { fontName: string; fontWeight: string[] };

export const COLORS = {
  APP_PRIMARY_50: "#fef2f0",
  APP_PRIMARY_100: "#fde6e2",
  APP_PRIMARY_200: "#fac3b8",
  APP_PRIMARY_300: "#f7a08e",
  APP_PRIMARY_400: "#f47d64",
  APP_PRIMARY_500: "#f15a3a",
  APP_PRIMARY_600: "#da4722",
  APP_PRIMARY_700: "#b63a1c",
  APP_PRIMARY_800: "#922d15",
  APP_PRIMARY_900: "#6e220f",
  APP_PRIMARY_950: "#3a120a",

  APP_SECONDARY_50: "#f0f5fe",
  APP_SECONDARY_100: "#e0eafd",
  APP_SECONDARY_200: "#c7d9fb",
  APP_SECONDARY_300: "#9dbdf7",
  APP_SECONDARY_400: "#699cf1",
  APP_SECONDARY_500: "#2060d4",
  APP_SECONDARY_600: "#1d4fb4",
  APP_SECONDARY_700: "#1a3f94",
  APP_SECONDARY_800: "#163576",
  APP_SECONDARY_900: "#132c61",
  APP_SECONDARY_950: "#0c1b3d",

  APP_THIRD_50: "#fafafa",
  APP_THIRD_100: "#f5f5f5",
  APP_THIRD_200: "#e9e9e9",
  APP_THIRD_300: "#d6d6d6",
  APP_THIRD_400: "#a3a3a3",
  APP_THIRD_500: "#8c8c8c",
  APP_THIRD_600: "#737373",
  APP_THIRD_700: "#525252",
  APP_THIRD_800: "#404040",
  APP_THIRD_900: "#262626",
  APP_THIRD_950: "#171717",

  APP_SUBTLE_50: "#B0AEAE",

  APP_BACKGROUND_50: "#ffffff",
  APP_BACKGROUND_100: "#fefefe",
  APP_BACKGROUND_200: "#fdfdfd",
  APP_BACKGROUND_300: "#fcfcfc",
  APP_BACKGROUND_400: "#fbfbfb",
  APP_BACKGROUND_500: "#fafafa",
  APP_BACKGROUND_600: "#e3e3e3",
  APP_BACKGROUND_700: "#c7c7c7",
  APP_BACKGROUND_800: "#a6a6a6",
  APP_BACKGROUND_900: "#8a8a8a",
  APP_BACKGROUND_950: "#525252",
} as const;

export const FONTS = {
  CDN: {
    PRIMARY: ({ fontName = "Cairo", fontWeight = ["400", "700"] }: FontType) =>
      `https://fonts.googleapis.com/css2?family=${fontName.replace(
        / /g,
        "+"
      )}:wght@${fontWeight.join(";")}&display=swap`,
    SECONDARY: ({
      fontName = "Cairo",
      fontWeight = ["400", "700"],
    }: FontType) =>
      `https://fonts.googleapis.com/css2?family=${fontName.replace(
        / /g,
        "+"
      )}:wght@${fontWeight.join(";")}&display=swap`,
  },
  WEIGHTS: {
    PRIMARY: ["200", "300", "400", "500", "600", "700", "800", "900"],
    SECONDARY: ["400", "700"],
  },
  FAMILY: {
    PRIMARY: "Cairo",
    SECONDARY: "Montserrat",
  },
  STACK: {
    PRIMARY: "Cairo, sans-serif",
    SECONDARY: "Cairo, sans-serif",
  },
} as const;

export const CSS_VARIABLES = {
  PRIMARY: {
    50: "--primary-color-50",
    100: "--primary-color-100",
    200: "--primary-color-200",
    300: "--primary-color-300",
    400: "--primary-color-400",
    500: "--primary-color-500",
    600: "--primary-color-600",
    700: "--primary-color-700",
    800: "--primary-color-800",
    900: "--primary-color-900",
    950: "--primary-color-950",
  },
  SECONDARY: {
    50: "--secondary-color-50",
    100: "--secondary-color-100",
    200: "--secondary-color-200",
    300: "--secondary-color-300",
    400: "--secondary-color-400",
    500: "--secondary-color-500",
    600: "--secondary-color-600",
    700: "--secondary-color-700",
    800: "--secondary-color-800",
    900: "--secondary-color-900",
    950: "--secondary-color-950",
  },
  THIRD: {
    50: "--third-color-50",
    100: "--third-color-100",
    200: "--third-color-200",
    300: "--third-color-300",
    400: "--third-color-400",
    500: "--third-color-500",
    600: "--third-color-600",
    700: "--third-color-700",
    800: "--third-color-800",
    900: "--third-color-900",
    950: "--third-color-950",
  },
  TEXT_COLOR: {
    DEFAULT: "--text-color-default",
  },
  SUBTITLE: {
    DEFAULT: "--subtitle-color-default",
  },
  INPUT_HINT: {
    DEFAULT: "--input-hint-color-default",
  },
  MS_COLOR: {
    DEFAULT: "--ms-color-default",
  },
  GREEN: {
    DEFAULT: "--green-color-default",
  },
  RED: {
    DEFAULT: "--red-color-default",
  },
  BACKGROUND: {
    50: "--background-color-50",
    100: "--background-color-100",
    200: "--background-color-200",
    300: "--background-color-300",
    400: "--background-color-400",
    500: "--background-color-500",
    600: "--background-color-600",
    700: "--background-color-700",
    800: "--background-color-800",
    900: "--background-color-900",
    950: "--background-color-950",
  },
  FONT: {
    PRIMARY: "--font-primary",
    SECONDARY: "--font-secondary",
  },
} as const;

export const config = {
  theme: COLORS,
  fonts: FONTS,
  cssVariables: CSS_VARIABLES,
};
