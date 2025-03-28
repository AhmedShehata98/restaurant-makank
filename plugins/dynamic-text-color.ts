function getEffectiveBgColor(el: HTMLElement | null): string {
  while (el && el instanceof HTMLElement) {
    let bgColor = window.getComputedStyle(el).backgroundColor;

    // Resolve CSS variable if needed
    if (bgColor.startsWith("var(")) {
      bgColor = resolveCSSVariable(bgColor, el);
    }

    // If the color is NOT transparent, return it
    if (bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
      return bgColor;
    }

    el = el.parentElement as HTMLElement | null; // Ensure it's explicitly nullable
  }

  return "white"; // Default fallback
}

function resolveCSSVariable(varString: string, el: HTMLElement) {
  const varName = varString.match(/var\((--[^,)]+)\)/)?.[1];
  if (!varName) return "white"; // Default if we can't parse

  return getComputedStyle(el).getPropertyValue(varName).trim() || "white";
}

function setTextColor(elem: HTMLElement) {
  const bgColor = getEffectiveBgColor(elem);
  const match = bgColor.match(/\d+/g);

  if (!match) return;

  const [r, g, b] = match.map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  elem.style.transition =
    "color 0.1s ease-in-out, background-color 0.3s ease-in-out";
  elem.style.color = brightness > 120 ? "var(--text-color-default)" : "#ffffff";
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("dynamic-color", {
    beforeMount(elem) {
      if (import.meta.client) {
        setTextColor(elem);
      }
    },
    updated(elem) {
      if (import.meta.client) {
        setTextColor(elem);
      }
    },
  });
});
