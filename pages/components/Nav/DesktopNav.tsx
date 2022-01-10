import {
  Box,
  Flex,
  Heading,
  Link,
  Popover,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

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
  return (
    <Stack
      width="500px"
      height="96px"
      alignItems={"center"}
      justify={"center"}
      bg="rgba(255, 255, 255, 0.04)"
      backdropFilter="blur(81.5485px)"
      direction={"row"}
      spacing="37px"
    >
      {NAV_ITEMS.map((navItem) => (
        <React.Fragment key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href}>
                <Heading
                  as="span"
                  p={2}
                  fontSize={"14px"}
                  letterSpacing={"2.36px"}
                  fontWeight={400}
                  fontFamily={"Barlow Condensed"}
                  color="white"
                  lineHeight={"17px"}
                >
                  {navItem.label}
                </Heading>
              </Link>
            </PopoverTrigger>
          </Popover>
        </React.Fragment>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          {/* <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} /> */}
        </Flex>
      </Stack>
    </Link>
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
