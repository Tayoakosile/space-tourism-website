import { Box } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Box bg="#0B0D17" h="100%">
      <Nav />
      {children}
    </Box>
  );
};

export default Layout;
