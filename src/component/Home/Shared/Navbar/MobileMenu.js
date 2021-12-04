import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Box } from "@mui/system";
import React from "react";

const MobileMenu = ({ handleOpenNavMenu, anchorElNav, handleCloseNavMenu }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              padding: "0 10px",
            }}
            onClick={handleCloseNavMenu}
          >
            <Button> About</Button>
            <Button>Pricing</Button>
            <Button>Testimonials</Button>
            <Button>Contact</Button>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default MobileMenu;
