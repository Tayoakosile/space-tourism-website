import { Box } from "@chakra-ui/react";
import React from "react";
import useMedia from "../useMediaQuery";
import Header from "./components/Header";
import AppTab from "./components/Tab";

const Destination = () => {
  const { isTabletSize, isLaptopSize } = useMedia();
  return (
    <Box
      as="section"
      pt={{ base: "124px", md: "124px" }}
      px="24px"
      bgImage={{
        base: 'url("img/destination/background-destination-mobile.jpg")',
        md: 'url("img/destination/background-destination-tablet.jpg")',
        lg: 'url("img/destination/background-destination-desktop.jpg")',
      }}
      bgRepeat={"no-repeat"}
      bgSize="cover"
      h={{ base: "100%", sm: "100vh", md: "100vh" }}
    >
      <Header no="1" word={"Pick your destination"} />
      <AppTab isTabletSize={isTabletSize} isLaptopSize={isLaptopSize} />
    </Box>
  );
};

export default Destination;
