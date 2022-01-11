import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Header = ({ no, word }: { no: string; word: string }) => {
  return (
    <HStack
      justify={{ base: "center", md: "flex-start" }}
      pl={{ base: "", md: "38.5px", lg: "14" }}
      mt={{ md: "40px", lg: "12" }}
      alignItems={{ base: "center", md: "baseline" }}
      pb={{ base: "", md: "50px", lg: "30px" }}
    >
      <Heading
        fontFamily={"Barlow Condensed"}
        fontWeight={"700"}
        size="sm"
        color="#FFFFFF"
        opacity="0.25"
        as="span"
        fontSize={{ md: "20px", lg: "28px" }}
      >
        0{no}
      </Heading>
      <Heading fontSize={{ md: "24px", lg: "28px" }} as="p" size="sm">
        {word}
      </Heading>
    </HStack>
  );
};

export default Header;
