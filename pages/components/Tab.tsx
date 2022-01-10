import {
  Tabs,
  Box,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import React from "react";
import { destinations } from "../../model";

console.log(destinations);
const AppTab = () => {
  const [image, setImage] = React.useState<string>(
    "/img/destination/image-europa.webp"
  );

  return (
    <Box mt="">
      <VStack as="span" mt="32px">
        <Image src={image} width="170px" height="170px" />
      </VStack>
      <Tabs mt="74px">
        <TabList fontFamily="Barlow Condensed" color="white">
          {destinations.map((destination) => (
            <Tab
              onClick={() => setImage(destination.images.webp)}
              key={destination.name}
            >
              {destination.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AppTab;
