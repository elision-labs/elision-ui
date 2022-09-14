import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import MotionBox from "lib/components/motion/Box";

const Page404 = () => {

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={{ base: "100%", sm: "70%", md: "60%" }}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 - Image not found"
        />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray">
            No Worries :)
          </Text>
          <Link href="/" passHref>
            <Button
              backgroundColor="teal.500"
              size="sm"
            >
              Head Back Here
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
