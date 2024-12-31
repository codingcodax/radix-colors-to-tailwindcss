#!/usr/bin/env node
import * as RadixColors from '@radix-ui/colors';

import { EXCLUDE_PATTERNS } from '~/config/constants';
import { HexToHSL } from '~/helpers/hex-to-hsl';
import { HSLToString } from '~/helpers/hsl-to-string';
import { ColorSet, ColorValues } from '~/types';

const shouldIncludeColor = (key: string): boolean =>
  !EXCLUDE_PATTERNS.some((pattern) => key.includes(pattern));

const convertValues = (values: ColorValues): ColorValues => {
  const newValues = { ...values };

  Object.entries(newValues).forEach(([key, value]) => {
    if (typeof value === 'string') {
      const hsl = HexToHSL(value);
      if (hsl) {
        newValues[key] = HSLToString(hsl);
      }
    }
  });

  return newValues;
};

const hslColors = Object.entries(RadixColors)
  .filter(([key]) => shouldIncludeColor(key))
  .map(
    ([name, values]): ColorSet => ({
      name,
      values: convertValues(values as ColorValues),
    }),
  );

console.log(hslColors);
