import { fontQuery, themeQuery } from "~/api/graphql/queries/theme";
import { mockGetThemeRequest } from "~/api/settings";
import { config } from "~/constants/default-config";
import { QUERIES_KEYS } from "~/constants/queries-keys";
import type { ThemeResponse } from "~/types/settings";
import type {
  CombinedColorsWithCssVarsType,
  FontConfig,
  FontType,
  GeneratedColorsValuesType,
  Theme,
} from "~/types/theme";

export default async function useAppTheme() {
  const { data: theme } = useGraphQL<{
    themes: Theme[];
  }>(themeQuery,undefined,{key:QUERIES_KEYS.THEME});
  const { data: fonts } = useGraphQL<FontConfig>( fontQuery ,undefined,{key:QUERIES_KEYS.FONTS});

  const response = await mockGetThemeRequest();
  const data = JSON.parse(response) as ThemeResponse;


  if (!theme.value?.themes) {
    return createError({
      statusCode: 400,
      message: "theme settings is undefined or fetch failed",
    });
  }
  const transformedThemes = computed(() =>
    convertThemesToObject(theme.value.themes)
  );
  const colors = { ...transformedThemes.value, third: "#D6D6D6" };

  const colorsValues = getColorsShades({
    ...data,
    colors,
  });

  const combinedProperties = combineColorsCssVars(colorsValues);
  if (!fonts.value) {
    return createError({
      statusCode: 400,
      message: "Fonts settings is undefined or fetch failed",
    });
  }

  const fontsSetup = {
    cdn: {
      primary: `https://fonts.googleapis.com/css2?family=${fonts.value?.font_families.primary?.replace(
        / /g,
        "+"
      )}:wght@${fonts.value?.font_weights.primary?.join(";")}&display=swap`,
      secondary: `https://fonts.googleapis.com/css2?family=${fonts.value?.font_families.secondary?.replace(
        / /g,
        "+"
      )}:wght@${fonts.value?.font_weights.secondary?.join(";")}&display=swap`,
    },
    primaryName: fonts.value?.font_families.primary,
    secondaryName: fonts.value?.font_families.secondary,
  };
  applyTheme(combinedProperties, fontsSetup);
}

function getColorsShades(data: ThemeResponse) {
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
}

function combineColorsCssVars(colorsValues: GeneratedColorsValuesType | null) {
  if (!colorsValues) {
    console.error("colors is null");
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
    const CSS_VARIABLE_NAME = config.cssVariables.SECONDARY[key as ColorKey];
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
    const CSS_VARIABLE_NAME = config.cssVariables.BACKGROUND[key as ColorKey];
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
      [config.cssVariables.GREEN.DEFAULT]: colorsValues.APP_GREEN || "#??????",
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
}
function applyTheme(
  combinedColorsCssVars: CombinedColorsWithCssVarsType | null,
  font: FontType
) {
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
        href: font.cdn.primary,
      },
      {
        rel: "stylesheet",
        href: font.cdn.secondary,
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
              ${[config.cssVariables.FONT.PRIMARY]}: ${font.primaryName };
              ${[config.cssVariables.FONT.SECONDARY]}: ${font.secondaryName};
            }`,
      },
    ],
  });
}
