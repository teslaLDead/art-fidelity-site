import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";

const Contact = () => {
  return (
    <Grid container justifyContent="center" textAlign="center" my={5} sx={{
      borderTop: '1px solid #dedada'
    }}>
      <Grid item xs={12} lg={6} mx={2}>
        <Box my={5}>
          <Typography variant="h6">
            Is there anything you’re looking for specifically?
          </Typography>
        </Box>
        <Box my={2}>
          <Typography>
            It could be a decorator, photographer, stylist, sound vendor or
            anyone else. Drop your query below and we’ll get back to you if we
            find something that fits your need!
          </Typography>
        </Box>
        <Grid container justifyContent="center" alignItems="center">
          <TextField
            sx={{
              width: "400px",
              marginLeft: "50px",
            }}
            label="Type your message here"
            variant="outlined"
          />
          <Box
            ml={2}
            sx={{
              ["@media (max-width:680px)"]: {
                mt: 2,
              },
            }}
          >
            <Button variant="outlined">Send</Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
