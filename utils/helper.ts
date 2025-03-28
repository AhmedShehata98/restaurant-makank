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
