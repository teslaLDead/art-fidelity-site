import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Link,
  responsiveFontSizes,
  IconButton,
} from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const links = ["Services", "Testimonials", "Portfolio", "Contact"];

const NavLink = ({ link, text }) => (
  <Box
    className="nav-links"
    sx={{
      // fontFamily: "AxiformaMedium",
      fontWeight: 600,
      letterSpacing: 0.45,
      marginTop: "5px",
      fontSize: "14px",
    }}
  >
    <Link color="inherit" href={link} underline="none">
      {text}
    </Link>
  </Box>
);
const Navbar = ({ passedScrollLimit }) => {
  const [mobileNavMenuOpen, setMobileNavMenuOpen] = useState(false);
  return (
    <>
      {mobileNavMenuOpen && (
        <>
          <Grid sx={{
            width: '100vw',
            height: '100vh'
          }}>

          </Grid>
        </>
      )}
      <Grid
        sx={{
          position: "fixed",
          color: passedScrollLimit ? "black" : "white",
          background: passedScrollLimit ? "white" : "none",
          zIndex: 100,
          minHeight: passedScrollLimit ? 70 : 80,
          borderBottom: passedScrollLimit ? "1px solid #e1e1e1" : "none",
        }}
        container
        justifyContent="center"
        alignItems="center"
        className="navbar"
        // spacing={2}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            ["@media (max-width:680px)"]: {
              justifyContent: "space-evenly",
            },
          }}
          justifyContent="space-evenly"
          item
          xs={8}
        >
          {links.slice(0, 2).map((el) => (
            <NavLink key={el} text={el} link={`#${el}`} />
          ))}
          <Link href="#Home">
            <img
              src={logo}
              style={{ filter: passedScrollLimit ? "invert(1)" : "none" }}
              alt="art fidelity "
            />
          </Link>
          {links.slice(2).map((el) => (
            <NavLink key={el} text={el} link={`#${el}`} />
          ))}
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              ["@media (min-width:680px)"]: {
                display: "none",
              },
            }}
          >
            <IconButton
              size="large"
              sx={{
                color: passedScrollLimit ? "black" : "white",
              }}
              component="span"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;

export { links };
