import { Box } from "@chakra-ui/react";
import React from "react";
import useMedia from "../../../useMediaQuery";
import MobileNav from "./MobileNav";
import Headroom from "react-headroom";
import DesktopNav from "./DesktopNav";

const Nav = () => {
  const { isTabletSize } = useMedia();
  return (
    <Box as='header'  position="relative">
      {!isTabletSize ? <MobileNav /> : <DesktopNav />}
    </Box>
  );
};

export default Nav;
