import "./styles.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import axiformaFontHeavy from "./assets/fonts/Heavy.otf";
import axiformaFontRegular from "./assets/fonts/Regular.otf";
import Section from "./components/Sections";
import Services, { dummyJson } from "./components/Sections";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "./components/Contact";

const theme = createTheme({
  typography: {
    fontFamily: "AxiformaRegular",
    h1: {
      fontSize: "4rem",
      fontFamily: "AxiformaHeavy",
    },
    p: {
      fontFamily: "AxiformaRegular",
    },
    subtitle2: {
      fontFamily: "AxiformaMedium",
      fontWeight: "bolder",
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {},
    MuiLink: {},
  },
});

// theme.typography.h1 = {
//   fontWeight: "bolder"
// };

export default function App() {
  const [stopScroll, setStopScroll] = useState(false);
  const [passedScrollLimit, setPassedScrollLimit] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 150) setPassedScrollLimit(true);
    else setPassedScrollLimit(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Box
          className="App"
          // sx={
          //   stopScroll && {
          //     overflow: "hidden",
          //     height: "100px",
          //   }
          // }
        >
          <Navbar
            passedScrollLimit={passedScrollLimit}
            setStopScroll={setStopScroll}
          />
          <Header />
          <div id="Services">
            <Services />
          </div>
          <div id="Testimonials">
            <Testimonials />
          </div>
          <div id="Contact">
            <Contact />
          </div>
          <div id="Footer">
          <Footer />
          </div>
        </Box>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
