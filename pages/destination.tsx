import { Box } from "@chakra-ui/react";
import Head from "next/head";
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
      <Head>
<title>Destination ~ Frontend Mentor | Space Tourism Website</title>
<meta name="title" content="Destination ~ Frontend Mentor | Space Tourism Website"/>
<meta name="description" content=" Space Tourism Website ~ Travel to space on a tour, Get to know your destination"/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://space-tourism-website-ten.vercel.app/technology"/>
<meta property="og:title" content="Destination ~ Frontend Mentor | Space Tourism Website"/>
<meta property="og:description" content=" Space Tourism Website ~ Travel to space on a tour, Get to know your destination"/>
<meta property="og:image" content="https://space-tourism-website-ten.vercel.app/img/technology/background-technology-desktop.jpg"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://space-tourism-website-ten.vercel.app/technology"/>
<meta property="twitter:title" content="Destination ~ Frontend Mentor | Space Tourism Website"/>
<meta property="twitter:description" content=" Space Tourism Website ~ Travel to space on a tour, Get to know your destination"/>
<meta property="twitter:image" content="https://space-tourism-website-ten.vercel.app/img/technology/background-technology-desktop.jpg"/>
      </Head>

      <Header no="1" word={"Pick your destination"} />
      <AppTab isTabletSize={isTabletSize} isLaptopSize={isLaptopSize} />
    </Box>
  );
};

export default Destination;
