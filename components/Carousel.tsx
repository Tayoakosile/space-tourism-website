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
import { crew } from "../model";

// Settings for the slider
const settings = {
  dots: true,
  dotsClass:'slick-dots slick-crew-dots',
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
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
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {crew.map((crew, index) => (
          <Box key={crew.name}>
            <VStack mb="74px">
              <Image width={226} height={222} src={crew.images.webp} />
              <Divider w="80%" />
            </VStack>
            {/* This is the block you need to change, to customize the caption */}
            {/* This is the block you need to change, to customize the caption */}
            <VStack
              textAlign="center"
              fontFamily={"Bellefair"}
              spacing="16px"
              px="24px"
            >
              <span>
                <Heading size="xs">{crew.role}</Heading>
                <Heading size="lg">{crew.name}</Heading>
              </span>

              <Heading size="sm" fontFamily='Barlow' as='p' textTransform="none" color="#D0D6F9">
                {crew.bio}
              </Heading>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
