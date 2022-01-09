import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
// import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { technology } from "../model";

const handleDragStart = (e) => e.preventDefault();

// technology

const items = technology.map(function ({
  name,
  distance,
  description,
  images,
}) {
  return (
    <Box color="blue.500" w="100%">
      <Image src={images.portrait} width="375px" height="170px" />
      <VStack mt="100px" px="24px">
        <Heading color="#D0D6F9" size="sm">
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
            {description}
          </Heading>
        </VStack>
      </VStack>
    </Box>
  );
});

console.log(technology, items);
// console.log(
const TechCarousel = () => {
  // const [carousel, setCarousel] = React.useState<[]>([]);

  return (
    <Box className="alice-tech">
      <AliceCarousel
        autoPlay={true}
        disableButtonsControls={true}
        mouseTracking
        items={items}
        autoPlayInterval={1700}
        infinite={true}
      />
    </Box>
  );
};

export default TechCarousel;
