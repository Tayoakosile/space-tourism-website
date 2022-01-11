import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import CrewCarousel from "./components/CrewCarousel";
import Header from "./components/Header";

const crew = () => {
  return (
    <Box as="section" pt="100px">
      <Head key="0399320">
        <title>Crew ~ Frontend Mentor | Space Tourism Website</title>
        <meta
          name="title"
          content="Crew ~ Frontend Mentor | Space Tourism Website"
        />
        <meta
          name="description"
          content="Space Tourism Website ~ Crew Members you would be traveling/ with"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://space-tourism-website-ten.vercel.app/crew"
        />
        <meta
          property="og:title"
          content="Crew ~ Frontend Mentor | Space Tourism Website"
        />
        <meta
          property="og:description"
          content="Space Tourism Website ~ Crew Members you would be traveling with"
        />
        <meta
          property="og:image"
          content="https://space-tourism-website-ten.vercel.app/img/crew/background-crew-mobile.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://space-tourism-website-ten.vercel.app/crew"
        />
        <meta
          property="twitter:title"
          content="Crew ~ Frontend Mentor | Space Tourism Website"
        />
        <meta
          property="twitter:description"
          content="Space Tourism Website ~ Crew Members you would be traveling with"
        />
        <meta
          property="twitter:image"
          content="https://space-tourism-website-ten.vercel.app/img/crew/background-crew-mobile.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://space-tourism-website-ten.vercel.app/img/favicon-32x32.png"
        />
      </Head>
      ;
      <Header no="3" word="Meet your crew" />
      <CrewCarousel />
    </Box>
  );
};

export default crew;
