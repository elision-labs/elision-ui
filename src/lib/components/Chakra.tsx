import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "lib/styles/theme";
import React from "react";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
