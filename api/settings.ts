import { FONTS } from "~/constants/default-config";
import type { LogoThemeType } from "~/types/shared";

export const mockGetThemeRequest = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Add artificial delay of 1 second to simulate API request
    setTimeout(() => {
      resolve(
        JSON.stringify({
          font: {
            ...FONTS,
            cdn: {
              primary: FONTS.CDN.PRIMARY({
                fontName: FONTS.FAMILY.PRIMARY,
                fontWeight: Array.from(FONTS.WEIGHTS.PRIMARY),
              }),
              secondary: FONTS.CDN.SECONDARY({
                fontName: FONTS.FAMILY.SECONDARY,
                fontWeight: Array.from(FONTS.WEIGHTS.SECONDARY),
              }),
            },
          },
          colors: {
            primary: "#da4722",
            secondary: "#2060D4",
            third: "#D6D6D6",
            subtitle: "#B0AEAE",
            inputHint: "#D6D6D6",
            ms: "#F4F6F9",
            green: "green",
            red: "red",
            background: "#FAFAFA",
            textColor: "#000000",
          },
          layout: {
            offerTheme: "squared",
            menuTheme: "theme_1",
          },
          logo: {
            DEFAULT: "/images/logo.svg",
            LIGHT: "/images/logo-light.svg",
            DARK: "/images/logo.svg",
          } as LogoThemeType,
        })
      );
    }, 1000);
  });
};
