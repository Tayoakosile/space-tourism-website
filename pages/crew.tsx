import React from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import Carousel from "../components/Carousel";

const crew = () => {
  return (
    <Box
      as="section"
      className="app-bg"
      bgImage={"url('/img/crew/background-crew-mobile.jpg')"}
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
          01
        </Heading>
        <Heading size="sm" align="center">
          Pick your destination
        </Heading>
      </HStack>

      <Carousel />
    </Box>
  );
};

export default crew;
