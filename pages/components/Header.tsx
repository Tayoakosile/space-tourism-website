import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Header = ({ no, word }: { no: string; word: string }) => {
  return (
    <HStack justify="center">
      <Heading
        fontFamily={"Barlow Condensed"}
        fontWeight={"700"}
        size="sm"
        color="#FFFFFF"
        opacity="0.25"
      >
        0{no}
      </Heading>
      <Heading size="sm">{word}</Heading>
    </HStack>
  );
};

export default Header;
