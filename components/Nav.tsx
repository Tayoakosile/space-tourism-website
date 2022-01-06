import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Nav = () => {
  //   const { toggleMenu } = useContext(MenuContext);
  return (
    <HStack as="header" justifyContent={"space-between"} p="24px">
      <Image src="/img/logo.svg" width={40} height={40} />
      <Image src="/img/icon-hamburger.svg" width={24} height={21} />
    </HStack>
  );
};

export default Nav;
