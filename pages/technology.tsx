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
      <HStack
        justifyContent={{ base: "center", md: "flex-start" }}
        pl={{ base: "0", md: "24px" }}
        py="32px"
      >
        <Heading
          as="span"
          size="sm"
          mixBlendMode={"normal"}
          opacity="0.25"
          fontWeight="bold"
          fontSize={{ base: "initial", md: "20px" }}
          textAlign="center"
        >
          03
        </Heading>
        <Heading size="sm" textAlign={{ base: "center", md: "left" }}>
          SPACE LAUNCH 101
        </Heading>
      </HStack>

      <TechCarousel />
    </Box>
  );
};

export default crew;
