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
  const [counter, setCounter] = useState(0);
  const increaseCounter = () =>
    setCounter(Math.min(testimonialsDummy.length, counter + 1));
  const decreaseCounter = () => setCounter(Math.max(0, counter - 1));

  return (
    <Box
      sx={{
        display: "flex",
        margin: "100px 150px",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      {testimonialsDummy.map((el, index) => (
        <TestimonialBox
          main={counter === index}
          setCounter={setCounter}
          index={index}
          {...el}
        />
      ))}
    </Box>
  );
};

const TestimonialBox = ({ name, text, image, main, index, setCounter }) => {
  if (main) {
    return (
      <Box>
        <Box my={2}>
          <Typography variant="subtitle2">{name}</Typography>
        </Box>
        <Box>
          <img src={image} alt={name} />
        </Box>
        <Box
          mt={2}
          sx={{
            maxWidth: "400px",
          }}
        >
          <Typography variant="body2">{text}</Typography>
        </Box>
      </Box>
    );
  } else
    return (
      <Box
        mx={3}
        sx={{
          minWidth: "200px",
          minHeight: "250px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setCounter(index)}
      >
        <img className="testimonial-image-secondary" src={image} alt={name} />
      </Box>
    );
};

export default Testimonials;
