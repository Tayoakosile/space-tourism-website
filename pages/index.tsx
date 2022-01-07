import React from "react";
import Link from "next/link";
import { Box, Heading, VStack, Button } from "@chakra-ui/react";

const index = () => {
  return (
    <Box
      as="section"
      className="app-bg"
      bgImage={"url('/img/home/background-home-mobile.jpg')"}
      px="24px"
      height="100vh"
    >
      <VStack spacing="16px">
        <Heading size="sm" align="center">
          So you want to travel to
        </Heading>

        <Heading size="3xl">Space</Heading>
        <Heading
          as="p"
          fontSize="14px"
          size="sm"
          textAlign="center"
          textTransform="none"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Heading>
      </VStack>

      <Link href="/destination">
        <VStack mt="75px">
          <Button
            w="150px"
            h="150px"
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
        </VStack>
      </Link>
    </Box>
  );
};

export default index;
