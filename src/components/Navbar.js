import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Link,
  responsiveFontSizes,
  IconButton,
} from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { linkName: "Services", link: "" },
  { linkName: "Testimonials", link: "" },
  { linkName: "Portfolio", link: "Services" },
  { linkName: "Contact", link: "Footer" },
];

const NavLink = ({ link, text }) => (
  <Box
    className="nav-links"
    sx={{
      // fontFamily: "AxiformaMedium",
      fontWeight: 600,
      letterSpacing: 0.45,
      marginTop: "5px",
      fontSize: "14px",
    }}
  >
    <Link color="inherit" href={link} underline="none">
      {text}
    </Link>
  </Box>
);
const Navbar = ({ passedScrollLimit, setStopScroll }) => {
  const [mobileNavMenuOpen, setMobileNavMenuOpen] = useState(false);
  const handleMobileNavOpen = () => {
    setMobileNavMenuOpen(true);
    setStopScroll(true);
  };
  const handleMobileNavClose = () => {
    setMobileNavMenuOpen(false);
    setStopScroll(false);
  };
  return (
    <>
      {mobileNavMenuOpen && (
        <>
          <Grid
            container
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            sx={{
              padding: "50px 0",
              zIndex: 1000,
              width: "100vw",
              height: "100%",
              background: "white",
              position: "fixed",
              overflow: "hidden",
              top: 0,
              left: 0,
            }}
          >
            <Box
              sx={{
                position: "fixed",
                right: "25px",
                top: 20,
              }}
            >
              <IconButton onClick={handleMobileNavClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            {links.map((el) => (
              <Grid
                my={2}
                item
                xs={12}
                sx={{
                  height: "50px",
                }}
              >
                <Link
                  onClick={handleMobileNavClose}
                  color="inherit"
                  href={`#${el.link === "" ? el.linkName : el.link}`}
                  underline="none"
                >
                  {el.linkName}
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Grid
        sx={{
          position: "fixed",
          color: passedScrollLimit ? "black" : "white",
          background: passedScrollLimit ? "white" : "none",
          zIndex: 100,
          minHeight: passedScrollLimit ? 70 : 80,
          borderBottom: passedScrollLimit ? "1px solid #e1e1e1" : "none",
        }}
        container
        justifyContent="center"
        alignItems="center"
        className="navbar"
        // spacing={2}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            ["@media (max-width:680px)"]: {
              justifyContent: "space-evenly",
            },
          }}
          justifyContent="space-evenly"
          item
          xs={8}
        >
          {links.slice(0, 2).map((el) => (
            <NavLink
              key={el.linkName}
              text={el.linkName}
              link={`#${el.link === "" ? el.linkName : el.link}`}
            />
          ))}
          <Link href="#Home">
            <img
              src={logo}
              style={{ filter: passedScrollLimit ? "invert(1)" : "none" }}
              alt="art fidelity "
            />
          </Link>
          {links.slice(2).map((el) => (
            <NavLink
              key={el.linkName}
              text={el.linkName}
              link={`#${el.link === "" ? el.linkName : el.link}`}
            />
          ))}
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              ["@media (min-width:680px)"]: {
                display: "none",
              },
            }}
          >
            <IconButton
              size="large"
              sx={{
                color: passedScrollLimit ? "black" : "white",
              }}
              component="span"
              onClick={handleMobileNavOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;

export { links };
