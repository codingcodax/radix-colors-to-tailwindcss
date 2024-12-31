import { calculateHue } from './calculate-hue';
import { parseHexColor } from './parse-hex-colors';

export const HexToHSL = (hex: string): HSL | undefined => {
  const rgb = parseHexColor(hex);
  if (!rgb) return undefined;

  const [r, g, b] = rgb;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) return [0, 0, l];

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = calculateHue(r, g, b, d) / 6;

  return [h, s, l];
};
