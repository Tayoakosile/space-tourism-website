import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Bellefair",
        color: "#fff",
        fontWeight: "400",
        textTransform: "uppercase",
      },
      sizes: {
        "5xl": {
          fontSize: "150px",
        },

        "4xl": {
          fontSize: "120px",
        },

        "3xl": {
          fontSize: "100px",
          fontWeight: "normal",
          lineHeight: "100px",
        },
        "2xl": {
          fontSize: "56px",
        },

        xl: {
          fontSize: "32px",
        },

        lg: {
          fontSize: "28px",
          fontFamily: "Barlow Condensed",
        },
        md: {
          fontSize: "20px",
        },
        sm: {
          fontSize: "16px",
          lineHeight: "25px",
          fontStyle: "normal",
          letterSpacing: "2.7px",
          fontWeight: "400",
          fontFamily: "Barlow",
        },
        xs: {
          fontSize: "14px",
          letterSpacing: "4.75px",
        },
      },
    },
  },
  colors: {
    darkGray: "#0B0D17",
    lightGreen: "#D0D6F9",
  },
  fonts: {
    heading: "Bellefair",
    condensed: "Barlow Condensed",
    barlow: "Barlow ",
  },
});
