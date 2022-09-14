import { Grid, Heading, Text } from "@chakra-ui/react";

const TestText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        Elision Protocol
      </Heading>

      <Text fontSize="xs" color="gray.500">
        Decentralized Options Trading Platform
      </Text>
    </Grid>
  );
};

export default TestText;
