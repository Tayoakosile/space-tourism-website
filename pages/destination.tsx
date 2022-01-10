import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import AppTab from "./components/Tab";

const Destination = () => {
  return (
    <Box
      pt="88px"
      px="24px"
      bgImage={{
        base: 'url("img/destination/background-destination-mobile.jpg")',
        md: 'url("img/home/background-home-tablet.jpg")',
        lg: 'url("img/destination/background-destination-desktop.jpg")',
      }}
      bgRepeat={"no-repeat"}
      bgSize="cover"
      h={{ base: "102vh", md: "100vh" }}
    >
      <Header no="1" word={"Pick your destination"} />
      <AppTab />
    </Box>
  );
};

export default Destination;
