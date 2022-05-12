import React, { useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  Link,
  responsiveFontSizes,
} from "@mui/material";
import logo from "../assets/logo.png";

const links = ["Services", "Testimonials", "Portfolio", "Contact"];

const NavLink = ({ link, text }) => (
  <Box
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
  return (
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
        justifyContent="space-evenly"
        item
        xs={8}
      >
        {links.slice(0, 2).map((el) => (
          <NavLink key={el} text={el} link={`#${el}`} />
        ))}
        <img
          src={logo}
          style={{ filter: passedScrollLimit ? "invert(1)" : "none" }}
          alt="art fidelity "
        />
        {links.slice(2).map((el) => (
          <NavLink key={el} text={el} link={`#${el}`} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Navbar;

export { links };
