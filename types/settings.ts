import type { FONTS } from "~/constants/default-config";
import type { LogoThemeType } from "./shared";

export interface ThemeResponse {
  font: {
    cdn: {
      primary: string;
      secondary: string;
    };
  } & typeof FONTS;
  colors: {
    primary: string;
    secondary: string;
    third: string;
    background: string;
    subtitle: string;
    inputHint: string;
    ms: string;
    green: string;
    red: string;
    textColor: string;
  };
  layout: {
    offerTheme: "rounded" | "squared";
    menuTheme: "theme_1" | "theme_2";
  };
  logo: LogoThemeType;
}
