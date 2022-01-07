import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Headroom from "react-headroom";
import Nav from "./Nav";
import "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const [isHeaderPinned, setIsHeaderPinned] = useState<boolean>(false);

  return (
    <Box bg="rgb(11 13 25)" mb='4' h="100%">
      <Box
        as={Headroom}
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
      {children}
    </Box>
  );
};

export default Layout;
