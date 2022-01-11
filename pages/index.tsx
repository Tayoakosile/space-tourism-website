import React from "react";
import Link from "next/link";
import { Box, Heading, VStack, Button, Stack } from "@chakra-ui/react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head key={"crew"}>
        <title>Home ~ Frontend Mentor | Space Tourism Website</title>
        <meta
          name="title"
          content="Home ~ Frontend Mentor | Space Tourism Website"
        />
        <meta
          name="description"
          content=" Space Tourism Website ~ Travel to space on a tour, make your imagination come to life"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://space-tourism-website-ten.vercel.app/"
        />
        <meta
          property="og:title"
          content="Home ~ Frontend Mentor | Space Tourism Website"
        />
        <meta
          property="og:description"
          content="A Space Tourism Website ~ Travel to space on a tour,make your imagination come to life"
        />
        <meta
          property="og:image"
          content="https://space-tourism-website-ten.vercel.app/img/home/background-home-tablet.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://space-tourism-website-ten.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Home ~ Frontend Mentor | Space Tourism Website"
        />
        <meta
          property="twitter:description"
          content="A Space Tourism Website ~ Travel to space on a tour, make your imagination come to life"
        />
        <meta
          property="twitter:image"
          content="https://space-tourism-website-ten.vercel.app/img/home/background-home-tablet.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://space-tourism-website-ten.vercel.app/img/favicon-32x32.png"
        />
      </Head>

      <Stack
        direction={{ base: "column", lg: "row" }}
        pt={{ base: "126px", md: "156px", lg: "180px" }}
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
            width={{ base: "100%", md: "90%" }}
            mx={"auto"}
            color="#D0D6F9"
            as="p"
            lineHeight="25px"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
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
    </>
  );
};

export default index;
