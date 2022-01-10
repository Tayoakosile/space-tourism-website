import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Box bg="#0B0D17" height="100%">
        <Nav />
        {children}
      </Box>
    </>
  );
};

export default Layout;
