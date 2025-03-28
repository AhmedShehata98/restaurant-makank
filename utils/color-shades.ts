function hexToHSL(hex: string): [number, number, number] {
  let r = 0,
    g = 0,
    b = 0;

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / d + 2) * 60;
        break;
      case b:
        h = ((r - g) / d + 4) * 60;
        break;
    }
  }

  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

function HSLToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const f = (n: number): string => {
    const k = (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}

export function generateShades(
  hex: string,
  shades?: number[]
): Record<number, string> {
  const defaultShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const shadesToUse = shades || defaultShades;

  const [h, s, l] = hexToHSL(hex);
  const shadesMap: Record<number, string> = {};

  const lightnessScale: Record<number, number> = {
    50: 95,
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: l,
    600: 40,
    700: 30,
    800: 20,
    900: 10,
    950: 5,
  };

  shadesToUse.forEach((shade) => {
    const newLightness = lightnessScale[shade] ?? l;
    shadesMap[shade] = HSLToHex(h, s, newLightness);
  });

  return shadesMap;
}
