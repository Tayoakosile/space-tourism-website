import {
  Tabs,
  Divider,
  TabList,
  TabPanels,
  Box,
  HStack,
  Stack,
  VStack,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { destinations } from "../../model";

const AppTab = ({
  isTabletSize,
  isLaptopSize,
}: {
  isTabletSize: boolean;
  isLaptopSize: boolean;
}) => {
  console.log(isLaptopSize);
  const [index, setIndex] = useState<number>(0);
  return (
    <Stack
      mt={{ base: "32px", md: "40px" }}
      spacing={{ base:'1',lg: "157px"}}
      direction={{ base: "column", lg: "row" }}
    >
      <VStack
        width={{ base: "100%", lg: "50%" }}
        mb={{ base: "26px", md: "53px" }}
        className="space-image"
      >
        {isLaptopSize ? (
          <Image
            src={destinations[index].images.png}
            alt="Destination image"
            width={445}
            height={445}
          />
        ) : (
          <Image
            src={destinations[index].images.webp}
            alt="Destination image"
            width={!isTabletSize ? 170 : 300}
            height={!isTabletSize ? 170 : 300}
          />
        )}
      </VStack>
      <Tabs width={{ base: "100%", lg: "50%" }}>
        <TabList
          as={HStack}
          spacing="10px"
          d="flex"
          justifyContent={{ base: "center", lg: "flex-start" }}
          border="0px"
          fontFamily="Barlow Condensed"
        >
          {destinations.map((destination, index) => (
            <Tab
              fontSize={{ base: "14px", md: "16px" }}
              color=" #D0D6F9 !important"
              key={destination.name}
              textTransform="uppercase"
              letterSpacing="2.36px"
              _focus={{
                color: "white !important",
                boxShadow: "none",
                transition: "0.3s color ease-in",
                background: "transparent",
              }}
              _active={{
                color: "white",
                transition: "0.3s color ease-in",
                background: "transparent",
              }}
              onClick={() => setIndex(index)}
            >
              {destination.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels pt="20px">
          {destinations.map((destination) => (
            <TabPanel
              as={VStack}
              key={destination.travel}
              alignItems={{ base: "center", lg: "flex-start" }}
              spacing="1px"
            >
              <Heading
                size="2xl"
                pb={{ base: "16px", md: "8px" }}
                fontSize={{ base: "56px", md: "80px", lg: "100px" }}
                fontWeight="400"
              >
                {destination.name}
              </Heading>
              <Heading
                as="p"
                size="sm"
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                fontFamily="Barlow"
                textAlign={{ base: "center", lg: "left" }}
                textTransform="none"
                w={{ base: "100%", md: "75%", lg: "100%" }}
                mx={{ base: null, md: "auto" }}
                lineHeight={{ sm: "", md: "28px" }}
                color="#D0D6F9"
              >
                {destination.description}
              </Heading>
              <Box pt="32px" />
              <Divider bg="#383B4B" w="90%" />
              <Box pb="32px" />

              <Stack
                spacing={{ base: "32px", md: "56px" }}
                direction={{ base: "column", md: "row" }}
                alignItems={{ base: "stretch", md: "baseline" }}
              >
                <VStack as="span" spacing="12px">
                  <Heading as="span" color="#D0D6F9" size="sm">
                    Avg. distance
                  </Heading>
                  <Heading size="lg" fontFamily={"Bellefair"} lineHeight="32px">
                    {destination.distance}
                  </Heading>
                </VStack>
                <VStack as="span">
                  <Heading as="span" color="#D0D6F9" size="sm">
                    Est. travel time
                  </Heading>
                  <Heading size="lg" fontFamily={"Bellefair"} lineHeight="32px">
                    {destination.travel}
                  </Heading>
                </VStack>
              </Stack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
export default AppTab;
