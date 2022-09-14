import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import MainSection from "lib/components/samples/MainSection";
import TestImage from "lib/components/samples/TestImage";
import TestText from "lib/components/samples/TestText";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <TestText />
      <TestImage />
      <MainSection />
    </Flex>
  );
};

export default Home;
