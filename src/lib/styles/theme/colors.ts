import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  elision: {
    50: '#f7f7f7',
    100: '#82eaff',
    200: '#8882ff',
    300: '#867df9',
    400: '#7a74e5',
    500: '#4f4f4f',
    600: '#262626',
    700: '#1f1f1f',
    800: '#121212',
    900: '#000000',
  }
};

const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
