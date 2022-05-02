import { Grid, Box, Typography, Link } from "@mui/material";
import React from "react";
const links = ["Services", "Testimonials", "Portfolio", "Contact"];
const Navbar = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid container justifyContent="space-evenly" item xs={8}>
        {links.map((el) => (
          <Box>{el}</Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Navbar;
