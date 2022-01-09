import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Headroom from "react-headroom";
import "../styles/Layout.module.css";
import DesktopNav from "./DesktopNav";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const [isHeaderPinned, setIsHeaderPinned] = useState<boolean>(false);
  return (
    <Box bg={{ base: "rgb(11 13 25)" }} h="100vh">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Box
        as={Headroom}
        d={{ base: "block", md: "none" }}
        height="100px !important"
        onPin={() => {
          setIsHeaderPinned(true);
          console.log("pinned");
        }}
        onUnfix={() => {
          setIsHeaderPinned(false);
          console.log("un spinned");
        }}
      >
        <Nav isHeaderPinned={isHeaderPinned} />
      </Box>
      <Box d={{ base: "none", md: "block" }}>
        <DesktopNav />
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
