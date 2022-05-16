import React from "react";
import { Box, Button, Grid, Typography, Link } from "@mui/material";
import dummyIcon from "../assets/dummy-icon.png";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

const dummyJson = [
  {
    heading: "film",
    background: "#4e0250",
    color: "white",
    text: "One-stop solution for all photo & video requirements.",
    buttonLink: "https://www.behance.net/artfidelityfilms",
    buttonText: "See Portfolio",
  },
  {
    heading: "music",
    background: "#58bc82",
    text: "Live performances at your club, party or wedding?",
    buttonLink: "#",
    buttonText: "See Catalogue",
  },
  {
    heading: "design",
    background: "#156580",
    color: "white",
    text: "From a pitch deck to a monthly social media calendar, everything.",
    buttonLink: "https://www.behance.net/artfidelityfilms",
    buttonText: "See Portolfio",
  },
];

const SectionPointer = ({ img, text }) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={2}>
          <Fade>
            {" "}
            <img src={img} alt="text" />
          </Fade>
        </Grid>
        <Grid item xs={10}>
          <Fade delay={300}>
            <Typography>{text}</Typography>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

const Section = ({
  heading,
  text,
  buttonLink,
  background,
  color,
  buttonText,
}) => {
  return (
    <Grid
      item
      xs={12}
      lg={4}
      className="services-section"
      sx={{ background: background, color: color }}
      py={5}
      textAlign="center"
    >
      <Grid container>
        <Grid item xs={12}>
          <Parallax speed={12}>
            <Fade delay={200}>
              <div>
                <p className="section-heading">{heading}</p>
              </div>
            </Fade>
          </Parallax>
          <Parallax speed={8}>
            <Fade delay={300}>
              <div>
                <p className="section-back-heading">{heading}</p>{" "}
              </div>
            </Fade>
          </Parallax>
        </Grid>
        <Box sx={{ marginTop: "150px", textAlign: "center" }} mx={5}>
          <Grid>{text}</Grid>
          <Box mt={3}>
            <Link underline="none" href={buttonLink} target="_blank">
              <Button
                sx={{
                  color: "black",
                  background: "white",
                }}
                variant="contained"
              >
                {buttonText}
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const Services = () => {
  return (
    <>
      <Grid container>
        {dummyJson.map((el) => (
          <Section {...el} />
        ))}
      </Grid>
    </>
  );
};

export default Services;

export { dummyJson };
