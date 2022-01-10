import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Header = ({ no, word }: { no: string; word: string }) => {
  return (
    <HStack
      justify={{ base: "center", md: "flex-start" }}
      pl={{base:"",lg:'12'}}
      alignItems={"center"}
      pb={{ base: "", md: "", lg: "50px" }}
    >
      <Heading
        fontFamily={"Barlow Condensed"}
        fontWeight={"700"}
        size="sm"
        color="#FFFFFF"
        opacity="0.25"
        as="span"
      >
        0{no}
      </Heading>
      <Heading as="p" size="sm">
        {word}
      </Heading>
    </HStack>
  );
};

export default Header;
