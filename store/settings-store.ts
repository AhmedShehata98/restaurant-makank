import { config } from "~/constants/default-config";
import { STORE_KEYS } from "./store-keys";
import { mockGetThemeRequest } from "~/api/settings";
import type { ThemeResponse } from "~/types/settings";
import type { LogoThemeType } from "~/types/shared";

// types

type LayoutType = {
  offerTheme: "rounded" | "squared";
  menuTheme: "theme_1" | "theme_2";
};

type ColorsType = {
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

type FontType = {
  cdn: {
    primary: string;
    secondary: string;
  };
  primaryName: string;
  secondaryName: string;
};
type GeneratedColorsValuesType = {
  APP_PRIMARY: Record<number, string>;
  APP_SECONDARY: Record<number, string>;
  APP_THIRD: Record<number, string>;
  APP_BACKGROUND: Record<number, string>;
  APP_SUBTITLE: string;
  APP_INPUT_HINT: string;
  APP_MS: string;
  APP_GREEN: string;
  APP_RED: string;
  APP_TEXT_COLOR: string;
};
type CombinedColorsWithCssVarsType = {
  primary: Record<number, string>[];
  secondary: Record<number, string>[];
  third: Record<number, string>[];
  background: Record<number, string>[];
  subtitle: Record<number, string>[];
  inputHint: Record<number, string>[];
  green: Record<number, string>[];
  red: Record<number, string>[];
  textColor: Record<number, string>[];
};
export type SettingsStateType = {
  font: FontType;
  layout: LayoutType;
  colors: ColorsType;
  isColoredAppHeader: boolean;
  logo: LogoThemeType | undefined;
};

export type SettingsGetterType = {};

export type SettingsActionsType = {
  setLayout: (layout: LayoutType) => void;
  setColors: (colors: ColorsType) => void;
  setFontName: (font: { primary: string; secondary: string }) => void;
  setFontCdn: (cdn: { primary: string; secondary: string }) => void;
  fetchAppSettings: () => Promise<string>;
  initializeAppSettings: () => Promise<void>;
  getColorsValues: (data: ThemeResponse) => GeneratedColorsValuesType | null;
  combineColorsCssVars: (
    colorsValues: GeneratedColorsValuesType | null
  ) => CombinedColorsWithCssVarsType | null;
  applySetting: (
    combinedColorsCssVars: CombinedColorsWithCssVarsType | null
  ) => void;
  setColoredAppHeader: (value: boolean) => void;
  setLogo: (logo: LogoThemeType) => void;
};

export const useSettingsStore = defineStore<
  string,
  SettingsStateType,
  SettingsGetterType,
  SettingsActionsType
>(STORE_KEYS.SETTINGS, {
  state: () => ({
    isColoredAppHeader: false,
    logo: undefined,
    font: {
      cdn: {
        primary: "",
        secondary: "",
      },
      primaryName: "",
      secondaryName: "",
    },
    layout: {
      offerTheme: "rounded",
      menuTheme: "theme_1",
    },
    colors: {
      primary: "",
      secondary: "",
      third: "",
      background: "",
      subtitle: "",
      inputHint: "",
      ms: "",
      green: "",
      red: "",
      textColor: "",
    },
  }),
  getters: {},
  actions: {
    setColoredAppHeader(value) {
      this.isColoredAppHeader = value;
    },
    async fetchAppSettings() {
      return await mockGetThemeRequest();
    },
    async initializeAppSettings() {
      try {
        const response = await this.fetchAppSettings();
        const data = JSON.parse(response) as ThemeResponse;

        // apply themes and settings
        const colorsValues = this.getColorsValues(data);
        const combinedProperties = this.combineColorsCssVars(colorsValues);
        this.applySetting(combinedProperties);

        // Set settings in the store
        this.setColors(data.colors);
        this.setFontCdn(data.font.cdn);
        this.setFontName({
          primary: data.font.STACK.PRIMARY,
          secondary: data.font.STACK.SECONDARY,
        });
        this.setLayout(data.layout);
        this.setLogo(data.logo);
      } catch (error) {
        console.error(
          "ERROR , inside settings store while initializing app settings, ",
          error
        );
      }
    },
    getColorsValues(data) {
      if (data) {
        return {
          APP_PRIMARY: generateShades(data.colors.primary as string),
          APP_SECONDARY: generateShades(data.colors.secondary as string),
          APP_THIRD: generateShades(data.colors.third as string),
          APP_BACKGROUND: generateShades(data.colors.background as string),
          APP_SUBTITLE: data.colors.subtitle,
          APP_INPUT_HINT: data.colors.inputHint,
          APP_MS: data.colors.ms,
          APP_GREEN: data.colors.green,
          APP_RED: data.colors.red,
          APP_TEXT_COLOR: data.colors.textColor,
        };
      }
      return null;
    },
    combineColorsCssVars(colorsValues) {
      if (!colorsValues) {
        console.error("colors in useInitializeTheme is null");
        return null;
      }

      type ColorKey =
        | keyof typeof config.cssVariables.PRIMARY
        | keyof typeof config.cssVariables.SECONDARY
        | keyof typeof config.cssVariables.THIRD
        | keyof typeof config.cssVariables.BACKGROUND
        | keyof typeof config.cssVariables.SUBTITLE
        | keyof typeof config.cssVariables.INPUT_HINT
        | keyof typeof config.cssVariables.MS_COLOR
        | keyof typeof config.cssVariables.GREEN
        | keyof typeof config.cssVariables.RED
        | keyof typeof config.cssVariables.TEXT_COLOR;

      const primaryColors: Record<number, string>[] = Object.entries(
        colorsValues.APP_PRIMARY || {}
      ).map(([key, color]: [any, string]) => {
        const CSS_VARIABLE_NAME = config.cssVariables.PRIMARY[key as ColorKey];
        return { [CSS_VARIABLE_NAME]: color };
      });

      const secondaryColors: Record<number, string>[] = Object.entries(
        colorsValues.APP_SECONDARY || {}
      ).map(([key, color]: [any, string]) => {
        const CSS_VARIABLE_NAME =
          config.cssVariables.SECONDARY[key as ColorKey];
        return { [CSS_VARIABLE_NAME]: color };
      });

      const thirdColors: Record<number, string>[] = Object.entries(
        colorsValues.APP_THIRD || {}
      ).map(([key, color]: [any, string]) => {
        const CSS_VARIABLE_NAME = config.cssVariables.THIRD[key as ColorKey];
        return { [CSS_VARIABLE_NAME]: color };
      });

      const backgroundColors: Record<number, string>[] = Object.entries(
        colorsValues.APP_BACKGROUND || {}
      ).map(([key, color]: [any, string]) => {
        const CSS_VARIABLE_NAME =
          config.cssVariables.BACKGROUND[key as ColorKey];
        return { [CSS_VARIABLE_NAME]: color };
      });

      const textColor: Record<string, string>[] = [
        {
          [config.cssVariables.TEXT_COLOR.DEFAULT]:
            colorsValues.APP_TEXT_COLOR || "#??????",
        },
      ];
      const subTitleColor: Record<string, string>[] = [
        {
          [config.cssVariables.SUBTITLE.DEFAULT]:
            colorsValues.APP_SUBTITLE || "#??????",
        },
      ];
      const inputHintColor: Record<string, string>[] = [
        {
          [config.cssVariables.INPUT_HINT.DEFAULT]:
            colorsValues.APP_INPUT_HINT || "#??????",
        },
      ];
      const greenColor: Record<string, string>[] = [
        {
          [config.cssVariables.GREEN.DEFAULT]:
            colorsValues.APP_GREEN || "#??????",
        },
      ];
      const redColor: Record<string, string>[] = [
        {
          [config.cssVariables.RED.DEFAULT]: colorsValues.APP_RED || "#??????",
        },
      ];

      return {
        primary: Object.values(primaryColors),
        secondary: Object.values(secondaryColors),
        third: Object.values(thirdColors),
        background: Object.values(backgroundColors),
        subtitle: subTitleColor,
        inputHint: inputHintColor,
        green: greenColor,
        red: redColor,
        textColor: textColor,
      };
    },
    applySetting(combinedColorsCssVars) {
      if (!combinedColorsCssVars) {
        console.error(
          "ERROR , inside setting store ,combinedColorsCssVars is null."
        );
        return;
      }
      useServerHead({
        link: () => [
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
          {
            rel: "stylesheet",
            href: this.font.cdn.primary,
          },
          {
            rel: "stylesheet",
            href: this.font.cdn.secondary,
          },
        ],
        style: () => [
          {
            // prettier-ignore
            children: ` :root {
                ${combinedColorsCssVars?.primary.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${combinedColorsCssVars?.secondary.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${combinedColorsCssVars?.textColor.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${combinedColorsCssVars?.subtitle.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${combinedColorsCssVars?.inputHint.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${combinedColorsCssVars?.green.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${combinedColorsCssVars?.red.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${combinedColorsCssVars?.background.map( c => `${Object.keys(c)[0]}: ${Object.values(c)[0]};`).join("\n")}
                ${[config.cssVariables.FONT.PRIMARY]}: ${this.font.primaryName };
                ${[config.cssVariables.FONT.SECONDARY]}: ${this.font.secondaryName};
              }`,
          },
        ],
      });
    },
    setLayout(layout: LayoutType) {
      this.layout = layout;
    },
    setColors(colors: ColorsType) {
      this.colors = colors;
    },
    setFontName(font: { primary: string; secondary: string }) {
      this.font.primaryName = font.primary;
      this.font.secondaryName = font.secondary;
    },
    setFontCdn(cdn: { primary: string; secondary: string }) {
      this.font.cdn.primary = cdn.primary;
      this.font.cdn.secondary = cdn.secondary;
    },
    setLogo(logo) {
      this.logo = logo;
    },
  },
});
