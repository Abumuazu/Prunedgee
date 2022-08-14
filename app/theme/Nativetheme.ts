import {extendTheme} from "native-base"
export  const Nativetheme = extendTheme({
    colors: {
      // Add new color
      primary: {
        500: '#5DB075'
      },
      gray: {
        text: '#BDBDBD',
        border: '#E8E8E8',
        fill: '#F6F6F6'
      },
      white: {
      500: '#FFFFFF'
      },
      black: {
       500: '#000'
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
