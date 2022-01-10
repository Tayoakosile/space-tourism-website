import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Nav from "./Nav/Nav";
import { theme } from "../../theme";

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Box bg="#0B0D17" height="100%">
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
