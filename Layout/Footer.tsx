import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Divider, Text, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => (
  <Box as="footer" px={4} style={{marginBottom:10, left:'33.33%'}}>
    <Divider my={4} />
    <Text fontSize="md" color="subtle" align="center">
      <Link
        _hover={{ color: "blue", textDecoration: "underline" }}
        href="https://www.linkedin.com/in/george-maidhof-70ab13249/"
        isExternal
      >
        George <ExternalLinkIcon boxSize={3}></ExternalLinkIcon>
      </Link>
      ,{" "}
      <Link
        _hover={{ color: "blue", textDecoration: "underline" }}
        href="https://www.linkedin.com/in/thuypham03/"
        isExternal
      >
        Thuy <ExternalLinkIcon boxSize={3}></ExternalLinkIcon>
      </Link>{" "}
      &{" "}
      <Link
        _hover={{ color: "blue", textDecoration: "underline" }}
        href="https://www.linkedin.com/in/emmanuel-dodoo-b97108231/"
        isExternal
      >
        Emmanuel <ExternalLinkIcon boxSize={3}></ExternalLinkIcon>
      </Link>{" "}
      Powered by{" "}
      <Link
        _hover={{ color: "blue", textDecoration: "underline" }}
        href="https://chakra-ui.com/"
        isExternal
      >
        Chakra-ui <ExternalLinkIcon boxSize={3}></ExternalLinkIcon>
      </Link>
    </Text>
  </Box>
);

export default Footer;
