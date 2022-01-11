import { Box } from "@chakra-ui/react";
import React from "react";
import CrewCarousel from "./components/CrewCarousel";
import Header from "./components/Header";

const crew = () => {
  return (
    <Box as="section" pt='100px'>
      <Header no="3" word="Meet your crew" />
      <CrewCarousel/>
    </Box>
  );
};

export default crew;
