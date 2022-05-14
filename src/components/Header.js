import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import testVideo from "../assets/videos/test.mp4";

const Header = () => {
  // todo - 
  // fix header line
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
        <Grid item xs={2} />
        <Grid item xs={4} lg={4}>
          <Parallax speed={-10}>
            <Box>
              <Fade duration={2000} delay={400}>
                <Typography variant="h1" sx={{ color: "white", textTransform: 'capitalize' }}>
                  Good music, good life.
                </Typography>
              </Fade>
            </Box>
          </Parallax>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{
            position: "absolute",
            bottom: 70,
            color: "white",
            ["@media (max-width:680px)"]: {
              flexDirection: "row",
            },
          }}
          item
          xs={12}
        >
          <Box
            textAlign="center"
            className="headerServices"
            sx={{
              mx: 5,
              ["@media (max-width:680px)"]: {
                mx: 1,
              },
            }}
            // mx={5}
          >
            <Fade duration={1500} delay={500}>
              {" "}
              <Typography variant="subtitle2">Film</Typography>
            </Fade>
          </Box>
          <Box
            textAlign="center"
            className="headerServices dot"
            sx={{
              mx: 5,
              ["@media (max-width:680px)"]: {
                mx: 1,
              },
            }}
          >
            <Fade duration={1500} delay={800}>
              <Typography variant="subtitle2">Music</Typography>
            </Fade>
          </Box>
          <Box
            textAlign="center"
            className="headerServices"
            sx={{
              mx: 5,
              ["@media (max-width:680px)"]: {
                mx: 1,
              },
            }}
          >
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
