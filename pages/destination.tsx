import { Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import AppTab from "./components/Tab";

const Destination = () => {
  const [isLargerThan768] = useMediaQuery("(min-width:760px)");
  const [isLargerThan1024] = useMediaQuery("(min-width:1024px)");
  const [isTabletSize, setIsTabletSize] = React.useState<boolean>(false);
  const [isLaptopSize, setIsLaptopSize] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsTabletSize(isLargerThan768);
    console.log("is laptop size", isLargerThan1024);
    setIsLaptopSize(isLargerThan1024);
  }, [isLargerThan768, isLargerThan1024]);

  return (
    <Box
      as="section"
      pt={{ base: "88px", md: "124px" }}
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
