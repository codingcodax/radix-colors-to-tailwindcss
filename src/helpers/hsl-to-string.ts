import { HSL } from '~/types';

export const HSLToString = ([h, s, l]: HSL): string =>
  `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
