import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "../../theme";
import Nav from "./Nav/Nav";

const Layout = ({ router, children }) => {
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
