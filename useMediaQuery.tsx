import React from "react";
import  { useMediaQuery } from "@chakra-ui/react";

const useMedia = () => {
  const [isLargerThan768] = useMediaQuery("(min-width:760px)");
  const [isLargerThan1024] = useMediaQuery("(min-width:1024px)");
  const [isTabletSize, setIsTabletSize] = React.useState<boolean>(false);
  const [isLaptopSize, setIsLaptopSize] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsTabletSize(isLargerThan768);
    console.log("is laptop size", isLargerThan1024);
    setIsLaptopSize(isLargerThan1024);
  }, [isLargerThan768, isLargerThan1024]);

  return { isLaptopSize, isTabletSize };
};

export default useMedia;
