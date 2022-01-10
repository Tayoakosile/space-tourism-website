import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <HStack
      position="absolute"
      left="0"
      right="0"
      px="24px"
      pt="33px"
      justify={"space-between"}
    >
      <Box as="span">
        <Link href="/">
          <Image src={"/img/shared/logo.svg"} width="40px" height="40px" />
        </Link>
      </Box>

      <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Image
          src={"/img/shared/icon-hamburger.svg"}
          width="24px"
          height="21px"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            bg="rgba(255, 255, 255, 0.04)"
            backdropFilter="blur(81.5485px)"
            color="#D0D6F9"
            w="80% !important"
          >
            <DrawerCloseButton w="34px" h="34px" />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}
            <DrawerBody pt="118px">
              <VStack
                textTransform="uppercase"
                color="#FFFFFF"
                alignItems="flex-start"
                spacing="32px"
              >
                {[
                  { link: "home", no: "01" },
                  { link: "destination", no: "02" },
                  { link: "crew", no: "03" },
                  { link: "technology", no: "04" },
                ].map(({ link, no }) => (
                  <HStack
                    key={no}
                    as="span"
                    pl="32px"
                    fontFamily="Barlow Condensed"
                  >
                    <Heading
                      as="p"
                      size="sm"
                      fontWeight="700"
                      fontFamily="Barlow Condensed"
                    >
                      {no}
                    </Heading>
                    <Heading
                      as="span"
                      onClick={onClose}
                      size="sm"
                      fontWeight="300"
                    >
                      <Link href={`/${link === "home" ? "" : link}`}>
                        {link}
                      </Link>
                    </Heading>
                  </HStack>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </HStack>
  );
}
