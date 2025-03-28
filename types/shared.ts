export enum LogoThemeEnum {
  LIGHT,
  DARK,
  DEFAULT,
}
export type LogoThemeType = {
  [K in keyof typeof LogoThemeEnum]: string;
};
