import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Bellefair",
        color: "#fff",
        textTransform: "uppercase",
      },
      sizes: {
        "4xl": {
          fontSize: "120px",
        },
        "3xl": {
          fontSize: "100px",
        },
        "2xl": {
          fontSize: "56px",
        },

        xl: {
          fontSize: "32px",
        },

        lg: {
          fontSize: "28px",
          fontWeight: "Barlow Condensed",
        },
        md: {
          fontSize: "28px",
        },
        sm: {
          fontSize: "16px",
          letterSpacing: "2.7px",
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
  },
  styles: {
    body: { overflow: "hidden" },
  },
});
