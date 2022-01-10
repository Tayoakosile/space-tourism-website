import React from "react";
import Link from "next/link";
import { Box, Heading, VStack, Button, Stack } from "@chakra-ui/react";

const index = () => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      pt={{ base: "56px", md: "106px", lg: "151px" }}
      px={{ base: "24px", md: "159px", lg: "105px" }}
      pb="12px"
      as="section"
      fontFamily="Barlow Condensed"
      bgImage={{
        base: 'url("img/home/background-home-mobile.jpg")',
        md: 'url("img/home/background-home-tablet.jpg")',
        lg: 'url("img/home/background-home-desktop.jpg")',
      }}
      bgRepeat={"no-repeat"}
      bgSize="cover"
      h={{ base: "102vh", md: "100vh" }}
    >
      <VStack
        px="24px"
        alignItems={{ base: "center", lg: "flex-start" }}
        spacing={{ base: "16px" }}
        textAlign={{ base: "center", md: null, lg: "left" }}
      >
        <Heading
          fontWeight="Barlow Condensed"
          size="sm"
          color="#D0D6F9"
          fontSize="15px"
        >
          SO, YOU WANT TO TRAVEL TO
        </Heading>
        <Heading size="4xl" fontSize={{ base: "80px", md: "150px" }}>
          Space
        </Heading>
        <Heading
          size="sm"
          textTransform={"none"}
          fontWeight={"400"}
          fontFamily={"Barlow"}
          width={{ base: "100%", md: "80%" }}
          mx={"auto"}
          color="#D0D6F9"
          as="p"
          lineHeight="25px"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Heading>
      </VStack>

      <VStack mt={{ base: "81px !important", md: "156px" }}>
        <Button
          borderRadius="50%"
          w={{ base: "150px", md: " 242px" }}
          h={{ base: "150px", md: " 242px" }}
          fontSize={{ base: "20px", md: " 32px" }}
          textTransform="uppercase"
          fontFamily={"Bellefair"}
          color="#0B0D17"
        >
          <Link href="/destination">Explore</Link>
        </Button>
      </VStack>
    </Stack>
  );
};

export default index;
