import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import testi from "../assets/testi.png";

const testimonialsDummy = [
  {
    name: "Chizai",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: testi
  },
  {
    name: "Chizai",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: testi
  },
  {
    name: "Chizai",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: testi
  }
];

const Testimonials = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () =>
    setCounter(Math.min(testimonialsDummy.length, counter + 1));
  const decreaseCounter = () => setCounter(Math.max(0, counter - 1));
  return (
    <Box>
      {testimonialsDummy.map((el, index) => (
        <TestimonialBox main={counter === index} {...el} />
      ))}
    </Box>
  );
};

const TestimonialBox = ({ name, text, image, main }) => {
  if (main) {
    return (
      <Box>
        <Box>
          <Typography>{name}</Typography>
        </Box>
        <Box>
          <img src={image} alt={name} />
        </Box>
        <Box>
          <Typography>{text}</Typography>
        </Box>
      </Box>
    );
  } else
    return (
      <Box>
        <img src={image} alt={name} />
      </Box>
    );
};

export default Testimonials;
