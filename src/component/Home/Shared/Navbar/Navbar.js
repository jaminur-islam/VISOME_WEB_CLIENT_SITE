import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../../img/logo.png";
import UsersMenu from "./UsersMenu";
import useAuth from "../../../hooks/useAuth";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { user } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ bgcolor: "#F0FBF7" }}>
      <Container>
        <AppBar
          sx={{ boxShadow: 0, bgcolor: "#F0FBF7" }}
          color="inherit"
          position="static"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <img src={logo} />
              </Typography>

              {/* mobileMenu */}
              <MobileMenu
                handleOpenNavMenu={handleOpenNavMenu}
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
                user={user}
              ></MobileMenu>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <img src={logo} alt="logo" />
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 3,
                    fontWeight: "bold",
                    color: "#010D82",
                    display: "block",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  About
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#010D82",
                    mr: 3,
                    fontWeight: "bold",
                    display: "block",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  Pricing
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#010D82",
                    mr: 3,
                    fontWeight: "bold",
                    display: "block",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  Testimonials
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#010D82",
                    mr: 3,
                    fontWeight: "bold",
                    display: "block",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  Contact
                </Button>
              </Box>
              {/* users menu */}
              <UsersMenu
                handleOpenUserMenu={handleOpenUserMenu}
                handleCloseNavMenu={handleCloseNavMenu}
                handleCloseUserMenu={handleCloseUserMenu}
                anchorElUser={anchorElUser}
              ></UsersMenu>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </Box>
  );
};
export default Navbar;
