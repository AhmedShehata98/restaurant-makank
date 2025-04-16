import type { ColorsType } from "~/types/theme";
export function setCSSVariable(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

export function getCSSVariable(name: string) {
  return document.documentElement.style.getPropertyValue(name);
}

export const isActiveRoute = (props: {
  href: string;
  routePath: string;
  locale: string;
}) => {
  return props.href === props.routePath?.replace(props.locale, "");
};

export const convertThemesToObject = (themeArray:[]):ColorsType =>  {
  return themeArray.reduce((acc, { name, value }) => {
    let key;

    if (name === "Main") {
      key = "primary";
    } else if (name === "second") {
      key = "secondary";
    } else if (name === "black") {
      key = "textColor";
    } else if (name === "white") {
      key = "background";
    } else {
      key = name;
    }

    acc[key] = value;
    return acc;
  }, {});
};