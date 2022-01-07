import {
  Tabs,
  Divider,
  TabList,
  TabPanels,
  Box,
  HStack,
  VStack,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { destinations } from "../model";

const AppTab = () => {
  const [index, setIndex] = useState<number>(0);
  console.log(destinations);
  return (
    <>
      <Tabs>
        <VStack mb="26px " mt="32px">
          <Image
            src={destinations[index].images.webp}
            width={170}
            height={170}
          />
        </VStack>
        <TabList
          as={HStack}
          spacing="10px"
          d="flex"
          justifyContent={"center"}
          border="0px"
          fontFamily="Barlow Condensed"
        >
          {destinations.map((destination, index) => (
            <Tab
              fontSize="14px"
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
            <TabPanel as={VStack} key={destination.travel} spacing="1px">
              <Heading size="2xl">{destination.name}</Heading>
              <Heading
                as="p"
                size="sm"
                fontSize="14px"
                textAlign="center"
                textTransform="none"
                color="#D0D6F9"
              >
                {destination.description}
              </Heading>
              <Box pt="32px" />
              <Divider bg="#383B4B" w="90%" />
              <Box pb="32px" />

              <VStack spacing="32px">
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
              </VStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};
export default AppTab;
