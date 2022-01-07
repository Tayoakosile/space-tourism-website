import React from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import TechCarousel from "../components/TechCarousel";

const crew = () => {
  return (
    <Box
      as="section"
      className="app-bg"
      bgImage={"url('/img/technology/background-technology-mobile.jpg')"}
    >
      <HStack justifyContent={"center"} py="32px">
        <Heading
          as="span"
          size="sm"
          mixBlendMode={"normal"}
          opacity="0.25"
          fontWeight="bold"
          textAlign="center"
        >
          02
        </Heading>
        <Heading size="sm" align="center">
          Meet your crew
        </Heading>
      </HStack>

      <TechCarousel />
    </Box>
  );
};

export default crew;
