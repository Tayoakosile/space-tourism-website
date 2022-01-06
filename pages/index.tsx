import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const index = () => {
  return (
    <Box
      as="section"
      bgImage={"url('/img/home/background-home-mobile.jpg')"}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      bgAttachment={"fixed"}
    >
      <Heading>So you want to travel to</Heading>
    </Box>
  );
};

export default index;
