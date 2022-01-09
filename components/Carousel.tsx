import { Box, Heading, VStack, Image as ImageHere } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import "react-alice-carousel/lib/alice-carousel.css";
// import React from "react";
import "../styles/Crew.module.css";

import AliceCarousel from "react-alice-carousel";

import { crew } from "../model";

const handleDragStart = (e) => e.preventDefault();

// crew

const items = crew.map(({ name, bio, images, width, height }) => {
  return (
    <Box
      className="crewCarousel"
      color="blue.500"
      onDragStart={handleDragStart}
      w="100%"
    >
      <VStack>
        <Image src={images.png} width={`${width}`} height={`${height}`} />
      </VStack>
      <VStack mt="100px" px="12px">
        <Heading color="#D0D6F9" fontSize="14px" size="sm">
          The Terminology
        </Heading>
        <VStack as="span">
          <Heading>{name}</Heading>
          <Heading
            size="sm"
            fontSize="15px"
            textTransform="none"
            textAlign="center"
          >
            {bio}
          </Heading>
        </VStack>
      </VStack>
    </Box>
  );
});

console.log(crew, items);
// console.log(
const Carousel = () => {
  // const [carousel, setCarousel] = React.useState<[]>([]);

  return (
    <Box className ='alice-crew'>
      <AliceCarousel
        autoPlay={true}
        disableButtonsControls={true}
        mouseTracking
        items={items}
        autoPlayInterval={1500}
        infinite={true}
      />
    </Box>
  );
};

export default Carousel;
