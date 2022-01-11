import { Box, Heading, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
// import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { crew } from "../../model";
import useMedia from "../../useMediaQuery";
''

const handleDragStart = (e) => e.preventDefault();

// crew

const Carousel = () => {
  
  // const [carousel, setCarousel] = React.useState<[]>([]);
  const { isLaptopSize, isTabletSize } = useMedia();

  const items = crew.map(({ name, bio, images, width, height, role }) => {
    return (
      <React.Fragment key={bio}>
        <Stack
          direction={{
            base: "column",
            md: "column-reverse",
            lg: "row-reverse",
          }}
          justify={{ base: "stretch", lg: "flex-start" }}
          alignItems={{ lg: "center" }}
          pt={{ base: "32px", md: "0" }}
          onDragStart={handleDragStart}
          w="100%"
          pr={{ base: "inherit", lg: "89px" }}
          pl={{ base: "inherit", lg: "120px" }}
        >
          <VStack
            className="image"
            w={{ base: "100%", lg: "60%" }}
            mt={{ md: "80px", lg: "0px !important" }}
            mb={{ base: "12px", md: "0" }}
          >
            {isLaptopSize ? (
              <Image alt={name} src={images.webp} width={568.07} height={712} />
            ) : (
              <Image
                src={images.png}
                alt={name}
                width={!isTabletSize ? width : 433}
                height={!isTabletSize ? height : 532}
              />
            )}
          </VStack>
          <VStack
            mx={{ base: "", md: "auto !important" }}
            w={{ base: "", md: "90%" }}
            px="12px"
            alignItems={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Heading
              color="#D0D6F9"
              fontSize={{ base: "14px", md: "24px" }}
              size="sm"
            >
              {role}
            </Heading>
            <VStack as="span" alignItems={{ base: "center", lg: "flex-start" }}>
              <Heading fontSize={{ md: "40px" }}>{name}</Heading>
              <Heading
                size="sm"
                fontSize={{ base: "15px", md: "16px" }}
                textTransform="none"
                fontStyle={"normal"}
                lineHeight="28px"
                width={{ base: "100%", lg: "80%" }}
                fontFamily="Barlow !important"
              >
                {bio}
              </Heading>
            </VStack>
          </VStack>
        </Stack>
      </React.Fragment>
    );
  });

  return (
    <Box
      sx={{
        "@media screen and (min-width:760px)": {
          ".alice-carousel__dots": {
            position: "absolute  !important",
            top: "190px",
            left: "45%",
            marginRight: "50px",
          },
          ".alice-carousel": {
            overflow: "hidden",
          },
        },
        "@media screen and (min-width:1000px)": {
          ".alice-carousel__dots": {
            top: "400px",
            left: "130",
          },
        },
      }}
    >
      <Box
        as={AliceCarousel}
        autoPlay={true}
        disableButtonsControls={true}
        mouseTracking
        items={items}
        autoPlayInterval={2000}
        infinite={true}
      />
    </Box>
  );
};

export default Carousel;
