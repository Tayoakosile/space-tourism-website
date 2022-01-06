import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Headroom from "react-headroom";
import Nav from "./Nav";
import "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const [isHeaderPinned, setIsHeaderPinned] = useState<boolean>(false);

  return (
    <Box bg="#0B0D17" h="100%">
      <Box
        as={Headroom}
        mb="24px"
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
