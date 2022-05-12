import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box
      textAlign="center"
      sx={{
        margin: "100px 200px",
        paddingTop:'20px',
        borderTop: '2px solid #dededa'
      }}
    >
      <Box my={5}>
        <Typography variant="h6">
          Is there anything you’re looking for specifically?
        </Typography>
      </Box>
      <Box my={2}>
        <Typography>
          It could be a decorator, photographer, stylist, sound vendor or anyone
          else. Drop your query below and we’ll get back to you if we find
          something that fits your need!
        </Typography>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <TextField
        
          sx={{
            width: "300px",
            marginLeft: '50px'
          }}
          label="Type your message here"
          variant="outlined"
        />
        <Box ml={2}>
          <Button variant="outlined">Send</Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
