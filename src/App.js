import "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import axiformaFontHeavy from "./assets/Regular.otf";

const theme = createTheme({
  typography: {
    fontFamily: "axiformaHeavy"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'axiformaHeavy';
        font-display: swap;
        src: local('Axiforma'), url(${axiformaFontHeavy}) format("opentype");
      }
      `
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Header />
      </div>
    </ThemeProvider>
  );
}
