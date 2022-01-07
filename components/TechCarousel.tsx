import React from "react";
import { VStack } from "@chakra-ui/react";
import {
  Box,
  Divider,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
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
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box position={"relative"} height={"100%"} pb="12" overflow={"hidden"}>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {technology.map((technology, index) => (
          <Box key={technology.name}>
            <VStack mb="100px">
              <Image
                width={375}
                height={170}
                src={technology.images.portrait}
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
                <Heading size="lg" fontFamily="Bellefair">
                  {technology.name}
                </Heading>
              </VStack>

              <Text fontFamily="Barlow" color="#fff">
                {technology.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
