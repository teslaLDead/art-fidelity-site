import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
const Footer = () => {
  return (
    <Grid>
      <Box>
        <Typography>Sign up for our newsletter</Typography>
      </Box>
      <Box>
        <Typography>Stay up to date with our stuff.</Typography>
      </Box>
      <Box>
        <TextField label="First Name" variant="outlined" />
        <TextField label="Email Address" variant="outlined" />
        <Button variant="contained">Subscribe</Button>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={4}>
            <Box>
              <Typography>About ArtFidelity</Typography>
            </Box>
            <Box>
              <Typography>loren ipsum stiff asdasd</Typography>
            </Box>
            <Grid container>
              <img src="" alt="instagram" />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography>Key Sections</Typography>
            </Box>
            <Box>{/* put links here */}</Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography>Newsletter</Typography>
            </Box>
            <Box>
              <TextField variant="outlined" label="Email address" />
            </Box>
            <Box>
              <Button variant="contained">Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>Copyright &#169; 2022 ArtFidelity. All rights reserver.</Box>
    </Grid>
  );
};

export default Footer;
