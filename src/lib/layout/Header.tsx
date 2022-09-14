import {Box, Flex, Button, Link} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box marginLeft="auto">
        <Link href="https://elision.x" isExternal rel="noopener noreferrer">
          elision.x
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
