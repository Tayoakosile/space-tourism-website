import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import Slider from "react-slick";
import { technology } from "../model";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  dotsClass: " slick-dots slick-tech-dots",
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const [isLargerQuery, setIsLargerQuery] = React.useState<boolean>(false);

  /* Breakpoints */
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  React.useEffect(() => {
    isLargerThan768 ? setIsLargerQuery(true) : setIsLargerQuery(false);
    console.log(isLargerThan768, isLargerQuery);
  }, [isLargerThan768]);

  /* Breakpoints */
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box position={"relative"} height={"100%"} pb="12" overflow={"hidden"}>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {technology.map((technology, index) => (
          <Box key={technology.name}>
            <VStack mb="100px">
              <Image
                alt={technology.name}
                width={isLargerQuery ? 768 : 375}
                height={isLargerQuery ? 422 : 170}
                src={
                  isLargerQuery
                    ? technology.images.portrait
                    : technology.images.landscape
                }
              />
            </VStack>
            <VStack textAlign="center" spacing="16px" px="24px">
              <VStack fontFamily="Bellefair " as="span" spacing="9px">
                <Heading
                  size="xs"
                  letterSpacing="2.36px"
                  fontWeight="400"
                  color="#D0D6F9"
                  fontFamily="Barlow Condensed"
                >
                  The Terminology
                </Heading>
                <Heading
                  size="lg"
                  fontSize={{ base: "32px", md: "40px" }}
                  fontFamily="Bellefair"
                >
                  {technology.name}
                </Heading>
              </VStack>
              <Heading
                size="sm"
                textTransform={"initial"}
                fontWeight={"400"}
                width={{ base: "100%", md: "90%" }}
                fontFamily="Barlow"
                as="p"
                color="#fff"
              >
                {technology.description}
              </Heading>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
