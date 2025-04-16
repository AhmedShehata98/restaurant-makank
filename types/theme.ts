export type Theme = {
  id: string;
  name: string;
  value: string;
};

export type ColorsType = {
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

export type GeneratedColorsValuesType = {
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
export type CombinedColorsWithCssVarsType = {
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

export type FontType = {
  cdn: {
    primary: string;
    secondary: string;
  };
  primaryName: string;
  secondaryName: string;
};

interface FontFamilies {
  __typename: string;
  primary: string;
  secondary: string;
}

interface FontStacks {
  __typename: string;
  primary: string;
  secondary: string;
}

interface FontWeights {
  __typename: string;
  primary: string[];
  secondary: string[];
}

export interface FontConfig {
  font_families: FontFamilies;
  font_stacks: FontStacks;
  font_weights: FontWeights;
}
