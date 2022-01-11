import { Box, Heading, VStack, Stack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import "react-alice-carousel/lib/alice-carousel.css";
// import React from "react";

import AliceCarousel from "react-alice-carousel";
import useMedia from "../../useMediaQuery";

import { crew } from "../../model";

const handleDragStart = (e) => e.preventDefault();

// crew

const Carousel = () => {
  // const [carousel, setCarousel] = React.useState<[]>([]);
  const { isLaptopSize, isTabletSize } = useMedia();

  const items = crew.map(({ name, bio, images, width, height, role }) => {
    return (
      <Stack
        direction={{ base: "column", md: "column-reverse", lg: "row-reverse" }}
        justify={{ base: "stretch", lg: "flex-start" }}
        alignItems={{ lg: "center" }}
        className="crewCarousel"
        pt={{ base: "32px", md: "" }}
        onDragStart={handleDragStart}
        w="100%"
      >
        <VStack w={{ base: "100%", lg: "60%" }} mb={{ base: "12px", md: "" }}>
          {isLaptopSize ? (
            <Image src={images.webp} width={568.07} height={712} />
          ) : (
            <Image
              src={images.png}
              width={!isTabletSize ? width : 433}
              height={!isTabletSize ? height : 532}
            />
          )}
        </VStack>
        <VStack
          mt="100px"
          mx={{ base: "", md: "auto !important" }}
          w={{ base: "", md: "70%" }}
          px="12px"
        >
          <Heading
            color="#D0D6F9"
            fontSize={{ base: "14px", md: "24px" }}
            size="sm"
          >
            {role}
          </Heading>
          <VStack as="span">
            <Heading textAlign="center" fontSize={{ md: "40px" }}>
              {name}
            </Heading>
            <Heading
              size="sm"
              fontSize={{ base: "15px", md: "16px" }}
              textTransform="none"
              textAlign="center"
              fontStyle={"normal"}
              lineHeight="28px"
              fontFamily="Barlow !important"
            >
              {bio}
            </Heading>
          </VStack>
        </VStack>
      </Stack>
    );
  });

  return (
    <Box
      sx={{
        "@media screen and (min-width:760px)": {
          ".alice-carousel__dots": {
            position: "absolute  !important",
            top: "230px",
            left: "45%",
            marginRight: "50px",
          },
        },
      }}
    >
      <Box
        as={AliceCarousel}
        // autoPlay={true}
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
