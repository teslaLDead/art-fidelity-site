import React from "react";
import { Grid, Box, Typography, Link } from "@mui/material";
import logo from "../assets/logo.png";

const links = ["Services", "Testimonials", "Portfolio", "Contact"];
const Navbar = () => {
  return (
    <Grid
      sx={{ position: "fixed", color: "white", zIndex: 100, minHeight: 80 }}
      container
      justifyContent="center"
      alignItems="center"
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
          <Box>{el}</Box>
        ))}
        <img src={logo} alt="art fidelity " />
        {links.slice(2).map((el) => (
          <Box>{el}</Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Navbar;
