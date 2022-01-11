import {
  Box,
  Flex,
  Heading,
  Link,
  Popover,
  PopoverTrigger,
  Stack,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useMedia from "../../../useMediaQuery";

export default function WithSubnavigation() {
  return (
    <Flex
      position="absolute"
      justify="space-between"
      left="0"
      right="0"
      pl="24px"
      align={"center"}
    >
      {/* Logo */}
      <Flex pt="24px" justify={"center"}>
        <Image src="/img/shared/logo.svg" width={48} height={48} />
      </Flex>
      {/* Logo */}

      {/* Other Box */}

      <DesktopNav />
    </Flex>
  );
}

const DesktopNav = () => {
  const { isLaptopSize } = useMedia();

  return (
    <Stack
      width={{ base: "", md: "500px", lg: "800px" }}
      height="96px"
      alignItems={"center"}
      justify={"center"}
      bg="rgba(255, 255, 255, 0.04)"
      backdropFilter="blur(81.5485px)"
      direction={"row"}
      mt ={{lg:'40px'}}
      spacing={{ base: "", md: "37px", lg: "50px" }}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <React.Fragment key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href}>
                <HStack
                  as="span"
                  alignItems="baseline"
                  spacing={isLaptopSize ? "5px" : "0px"}
                >
                  {isLaptopSize && (
                    <Heading
                      fontSize={"14px"}
                      fontWeight={700}
                      fontFamily={"Barlow Condensed"}
                      color="white"
                    >
                      0{index}
                    </Heading>
                  )}

                  <Heading
                    fontSize={"14px"}
                    letterSpacing={"2.36px"}
                    fontWeight={400}
                    fontFamily={"Barlow Condensed"}
                    color="white"
                    lineHeight={"17px"}
                  >
                    {navItem.label}
                  </Heading>
                </HStack>
              </Link>
            </PopoverTrigger>
          </Popover>
        </React.Fragment>
      ))}
    </Stack>
  );
};


interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Destination",
    href: "/destination",
  },
  {
    label: "Crew",
    href: "/crew",
  },
  {
    label: "Technology",
    href: "/technology",
  },
];
