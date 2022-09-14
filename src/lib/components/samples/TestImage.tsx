import { Flex } from "@chakra-ui/react";
import HelperImage from "./HelperImage";

const TestImage = () => {

  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <HelperImage src={`/nextjs-icon-dark.svg`} label="NextJS" />
      <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
      <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
    </Flex>
  );
};

export default TestImage;
