import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  Menu,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const UsersMenu = ({
  handleOpenUserMenu,
  handleCloseNavMenu,
  handleCloseUserMenu,
  anchorElUser,
}) => {
  const { user, handleSignOut, loading } = useFirebase();

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      {user.email ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                padding: "0 10px",
              }}
              onClick={handleCloseNavMenu}
            >
              <Typography sx={{ mx: "auto", fontSize: 20 }}>
                {user?.displayName}
              </Typography>
              <Typography>{user?.email}</Typography>
              <Button onClick={handleSignOut}>Log Out</Button>
            </Box>
          </Menu>
        </Box>
      ) : (
        <Link
          style={{
            textDecoration: "none",
            background: "blue",
            color: "white",
            padding: "6px 8px",
            borderRadius: "5px",
            fontSize: "18px",
          }}
          to="/login"
        >
          Log In
        </Link>
      )}
    </>
  );
};

export default UsersMenu;
