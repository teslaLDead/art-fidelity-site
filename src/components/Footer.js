import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Icon,
  Dialog,
  DialogTitle,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { links } from "./Navbar";
const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);
  return (
    <>
      <Dialog onClose={handleClose} open={modalOpen}>
        <Box m={5}>
          <Typography variant="h6">Thank you for subsrcibing!</Typography>
        </Box>
      </Dialog>
      <Grid py={5} sx={{ background: "#f1f5fb" }}>
        <Box pt={5} textAlign="center">
          <Typography variant="h5">
            Get the latest news on our events!
          </Typography>
        </Box>
        <Box
          my={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField label="First Name" variant="outlined" />
          <TextField
            sx={{ marginLeft: "10px" }}
            label="Email Address"
            variant="outlined"
          />
          <Button
            sx={{ marginLeft: "10px" }}
            onClick={handleOpen}
            variant="contained"
          >
            Subscribe
          </Button>
        </Box>
        <Box textAlign="center">
          <Typography variant="body1">
            We respect your privacy and promise not to spam!
          </Typography>
        </Box>
        <Box my={5} mx={5} sx={{ margin: "5rem 150px 0 150px" }}>
          <Grid container py={5}>
            <Grid item xs={4}>
              <Box className="footer-heading">
                <Typography variant="h6">About ArtFidelity</Typography>
              </Box>
              <Box>
                <Typography variant="body2">
                  loren ipsum stiff asdasd
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="footer-heading">
                <Typography variant="h6">Key Sections</Typography>
              </Box>
              <Box>
                {links.map((el) => (
                  <Box
                    my={2}
                    sx={{
                      color: "#00000087",
                    }}
                  >
                    <Link href="#" color="inherit" underline="none">
                      <Typography>{el}</Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="footer-heading">
                <Typography variant="h6">Contact</Typography>
              </Box>
              <Grid container alignItems="center">
                <Box mb={2}>
                  <Typography variant="body2">Phone: </Typography>
                  <Link
                    href="tel:+917011398153"
                    color="inherit"
                    underline="none"
                  >
                    +91-7011398153
                  </Link>
                  <Typography variant="body2">Email: </Typography>
                  <Link
                    href="mailto:hello@artfidelity.in"
                    color="inherit"
                    underline="none"
                  >
                    hello@artfidelity.in
                  </Link>
                </Box>
                <Grid container>
                  <Box mr={2}>
                    <Link color="inherit" target="_blank" href="https://instagram.com/artfidelity">
                      <InstagramIcon />
                    </Link>
                  </Box>
                  <Box mr={2}>
                    <Link
                      color="inherit"
                      target="_blank"
                      href="https://www.linkedin.com/company/artfidelity/"
                    >
                      <LinkedInIcon />
                    </Link>{" "}
                  </Box>
                  <Box mr={2}>
                    <Link color="inherit" target="_blank" href="instagram.com">
                      <FacebookIcon />
                    </Link>{" "}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          pt={3}
          textAlign="center"
          sx={{
            borderTop: "1px solid #d8ddd8",
            color: "#bababa",
          }}
        >
          <Typography variant="caption">
            Copyright &#169; 2022 ArtFidelity. All rights reserved.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Footer;
