import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import dummyIcon from "../assets/dummy-icon.png";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

const dummyJson = [
  {
    heading: "film",
    background: "#4e0250",
    color: "white",
    points: [
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ],
  },
  {
    heading: "music",
    background: "#58bc82",
    points: [
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ],
  },
  {
    heading: "design",
    background: "#156580",
    color: "white",
    points: [
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        img: dummyIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ],
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

const Section = ({ heading, points, background, color }) => {
  return (
    <Box
      className="services-section"
      style={{ background: background, color: color }}
      py={5}
    >
      <Grid container>
        <Grid item xs={5}>
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
        <Grid item xs={7}>
          {points.map((el) => (
            <SectionPointer {...el} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;

export { dummyJson };
