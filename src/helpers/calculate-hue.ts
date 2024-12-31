export const calculateHue = (
  r: number,
  g: number,
  b: number,
  d: number,
): number => {
  if (r === Math.max(r, g, b)) {
    return (g - b) / d + (g < b ? 6 : 0);
  }
  if (g === Math.max(r, g, b)) {
    return (b - r) / d + 2;
  }
  return (r - g) / d + 4;
};
