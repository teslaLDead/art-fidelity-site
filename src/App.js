import "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import axiformaFontHeavy from "./assets/fonts/Heavy.otf";
import axiformaFontRegular from "./assets/fonts/Regular.otf";
import Section from "./components/Sections";
import { dummyJson } from "./components/Sections";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "axiformaHeavy",
    h1: {
      fontWeight: "bolder"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'axiformaHeavy';
        font-display: swap;
        src: url(${axiformaFontHeavy}) format("opentype");
      }
      @font-face {
        font-family: 'axiformaRegular';
        font-display: swap;
        src: url(${axiformaFontRegular}) format("opentype");
      }
      `
    }
  }
});

// theme.typography.h1 = {
//   fontWeight: "bolder"
// };

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Header />
        {dummyJson.map((el) => (
          <Section {...el} />
        ))}
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
