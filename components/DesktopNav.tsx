import {
  Box,
  Flex,
  Heading,
  Popover,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex minH={"60px"} align={"center"}>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            p="24px"
          >
            <Image src="/img/logo.svg" width={48} height={48} />
          </Text>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack
      bg=" rgba(255, 255, 255, 0.04)"
      h="96px"
      w="450px"
      direction={"row"}
      spacing="37px"
      alignItems="center"
      justify="center"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Heading
                fontSize={"14px"}
                letterSpacing="2.36px"
                as="span"
                fontFamily={"Barlow Condensed"}
                fontWeight={400}
                color="#FFFFFF"
              >
                <Link href={navItem.href}>{navItem.label}</Link>
              </Heading>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
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
