import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Destination = () => {
  return (
    <Box
      as="section"
      className="app-bg"
      bgImage={"url('./img/background-destination-mobile.jpg"}
    >
      <HStack justifyContent={"center"}>
        <Heading
          as="span"
          size="sm"
          mixBlendMode={"normal"}
          opacity="0.25"
          textAlign="center"
        >
          01
        </Heading>
        <Heading size="sm" align="center">
          Pick your destination
        </Heading>
      </HStack>
    </Box>
  );
};

export default Destination;
