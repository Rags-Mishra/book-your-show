import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// This navbar is reponsive and has a hamburger menu for mobile view
function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.1rem",
              color: "#F05537",
              textDecoration: "none",
            }}
          >
            Book your show
          </Typography>

          <IconButton sx={{ display: { md: "none", xs: "block" },color:'white' }}>
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "block", md: "none" },
              color: "#F05537",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              textAlign:'center'
            }}
          >
            Book the show
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
