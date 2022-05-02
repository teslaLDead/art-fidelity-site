import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid
      alignItems="center"
      container
      spacing={5}
      className="app-header hv-100"
    >
      <Grid item xs={1} />
      <Grid item xs={4}>
        <Typography>We create unforgettable experiences with sound</Typography>
      </Grid>
    </Grid>
  );
};
export default Header;
