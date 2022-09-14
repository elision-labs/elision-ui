import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const repoLink = "https://github.com/elision-io/elision-ui";
const twitterLink = "https://twitter.com/ElisionProtocol"
const discordLink = "https://discord.gg/umdYPbRXa3"

const MainSection = () => {
  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<FaGithub />}
          size="lg"
        >
          Github
        </Button>
        <Button
          as="a"
          href={twitterLink}
          target="_blank"
          leftIcon={<FaTwitter />}
          size="lg"
        >
          Twitter
        </Button>
        <Button
          as="a"
          href={discordLink}
          target="_blank"
          leftIcon={<FaDiscord />}
          size="lg"
        >
          Discord
        </Button>
      </Flex>
    </Box>
  );
};

export default MainSection;
