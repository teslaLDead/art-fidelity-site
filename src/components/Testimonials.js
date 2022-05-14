import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import testi from "../assets/testi.png";

const testimonialsDummy = [
  {
    name: "Chizai",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: testi,
  },
  {
    name: "Chizai 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: testi,
  },
  {
    name: "Chizai 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: testi,
  },
];

const Testimonials = () => {
  // todo -
  // add scroll in mobile
  // add left and right arrow click
  const [counter, setCounter] = useState(1);
  const increaseCounter = () =>
    setCounter(Math.min(testimonialsDummy.length, counter + 1));
  const decreaseCounter = () => setCounter(Math.max(0, counter - 1));

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        // margin: "100px 150px",
        overflow: "hidden",
        alignItems: "center",
      }}
      my={5}
    >
      {testimonialsDummy.map((el, index) => (
        <TestimonialBox
          main={counter === index}
          setCounter={setCounter}
          index={index}
          {...el}
        />
      ))}
    </Grid>
  );
};

const TestimonialBox = ({ name, text, image, main, index, setCounter }) => {
  if (main) {
    return (
      <Grid container justifyContent="center" item xs={12} lg={6}>
        <Box mx={5} px={3}>
          <Box my={2}>
            <Typography variant="subtitle2">{name}</Typography>
          </Box>
          <Box>
            <img src={image} alt={name} />
            <Box mt={2}>
              <Typography variant="body2">{text}</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  } else
    return (
      <Grid container justifyContent="center" item xs={12} lg={3}>
        <Box
          mx={3}
          sx={{
            // minWidth: "200px",
            // minHeight: "250px",
            // display: "flex",
            // alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setCounter(index)}
        >
          <img className="testimonial-image-secondary" src={image} alt={name} />
        </Box>
      </Grid>
    );
};

export default Testimonials;
