import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Nav = ({ isHeaderPinned }: { isHeaderPinned: boolean }) => {
  //   const { toggleMenu } = useContext(MenuContext);
  return (
    <Box
      position={"sticky"}
      bg={isHeaderPinned ? "rgb(52 69 93 / 23%)" : "transparent"}
      initial={{ opacity: "2" }}
      mb="48px"
      top="0"
    >
      <HStack as="header" justifyContent={"space-between"} p="24px">
        <Image src="/img/logo.svg" width={40} height={40} />
        <Image src="/img/icon-hamburger.svg" width={24} height={21} />
      </HStack>
    </Box>
  );
};

export default Nav;
