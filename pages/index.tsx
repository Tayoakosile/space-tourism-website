import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { Box, Heading, VStack, Button } from "@chakra-ui/react";

const index = () => {
  return (
    <Box
      as="section"
      className="app-bg"
      bgImage={"url('/img/home/background-home-mobile.jpg')"}
      px="  24px"
      height="100vh"
    >
      <VStack
        spacing={{ base: "16px", md: "4px" }}
        pt={{ base: "initial", md: "106px" }}
      >
        <Heading
          size={useBreakpointValue({ base: "sm", md: "md" })}
          // fontSize={{ md: "20px" }}
          align="center"
          color={{ base: "#fff", md: "#D0D6F9" }}
          fontFamily={{ md: "Barlow Condensed" }}
        >
          So you want to travel to
        </Heading>

        <Heading size={useBreakpointValue({ base: "3xl", md: "5xl" })}>
          Space
        </Heading>
        <Heading
          as="p"
          fontSize={{ base: "14px", md: "16px" }}
          size="sm"
          textAlign="center"
          textTransform="none"
          w={{ md: "70%" }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Heading>
      </VStack>

      <VStack mt={{ base: "75px", md: "156px" }}>
        <Link href="/destination">
          <Button
            w={{ base: "150px", md: "242px" }}
            h={{ base: "150px", md: "242px" }}
            letterSpacing="1.25px"
            textTransform="uppercase"
            lineHeight="22.92px"
            fontWeight="400"
            borderRadius="50%"
            fontSize="20px"
            bg="#fff"
            fontFamily="Bellefair"
          >
            Explore
          </Button>
        </Link>
        {/* <Box mt='12'></Box> */}
      </VStack>
    </Box>
  );
};

export default index;
