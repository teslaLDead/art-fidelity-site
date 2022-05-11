import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Grid
        alignItems="center"
        sx={{
          position: "relative"
        }}
        container
        className="app-header hv-100"
      >
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Box>
            <Typography variant="h1" style={{ color: "white" }}>
              We create unforgettable experiences with sound
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ position: "absolute", bottom: 100, color: "white" }}
          item
          xs={12}
        >
          <Box mx={4}>
            <Typography>Film</Typography>
          </Box>
          <Box className="headerServices" mx={4}>
            <Typography>Music</Typography>
          </Box>
          <Box mx={4}>
            <Typography>Design</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
