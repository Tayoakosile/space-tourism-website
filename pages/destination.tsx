import { Box, Heading, HStack, Tabs } from "@chakra-ui/react";
import React from "react";
import AppTab from "../components/AppTab";

const Destination = () => {
  return (
    <Box
      as="section"
      px ='24px'
      pt={{ base: 'initial', md: '40px'}}
      className="app-bg"
      bgImage={"url('/img/destination/background-destination-mobile.jpg')"}
    >
      <HStack justifyContent={{base:"center",md:'flex-start'}} pb="32px">
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
        <Heading size="sm" align={{ base: "center", md: "left" }}>
          Pick your destination
        </Heading>
      </HStack>

      <AppTab />
    </Box>
  );
};

export default Destination;
