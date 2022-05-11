import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import dummyIcon from "../assets/dummy-icon.png";

const dummyJson = [
  {
    heading: "film",
    points: [
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      }
    ]
  },
  {
    heading: "music",
    points: [
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      }
    ]
  },
  {
    heading: "design",
    points: [
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        img: dummyIcon,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      }
    ]
  }
];

const SectionPointer = ({ img, text }) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={2}>
          <img src={img} alt="text" />
        </Grid>
        <Grid item xs={10}>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const Section = ({ heading, points }) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={5}>
          <Typography>{heading}</Typography>
          <Typography>{heading}</Typography>
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
