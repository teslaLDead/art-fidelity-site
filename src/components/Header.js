import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import testVideo from "../assets/videos/test.mp4";

const Header = () => {
  return (
    <Box>
      <video className="header-video" autoPlay muted loop id="headerVideo">
        <source src={testVideo} type="video/mp4" />
      </video>
      <Grid
        alignItems="center"
        sx={{
          position: "relative",
        }}
        container
        className="app-header hv-100"
      >
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Parallax speed={-10}>
            <Box>
              <Fade duration={2000} delay={400}>
                <Typography variant="h1" style={{ color: "white" }}>
                  We create unforgettable experiences with sound
                </Typography>
              </Fade>
            </Box>
          </Parallax>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ position: "absolute", bottom: 70, color: "white" }}
          item
          xs={12}
        >
          <Box textAlign="center" className="headerServices" mx={5}>
            <Fade duration={1500} delay={500}>
              {" "}
              <Typography variant="subtitle2">Film</Typography>
            </Fade>
          </Box>
          <Box textAlign="center" className="headerServices dot" mx={5}>
            <Fade duration={1500} delay={800}>
              <Typography variant="subtitle2">Music</Typography>
            </Fade>
          </Box>
          <Box textAlign="center" className="headerServices" mx={5}>
            <Fade duration={1500} delay={1000}>
              <Typography variant="subtitle2">Design</Typography>
            </Fade>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
