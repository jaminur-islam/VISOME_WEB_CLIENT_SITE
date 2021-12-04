import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../img/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        marginTop: "50px",
        padding: "50px 0",
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={3} class="col_item_1">
            <img src={logo} alt="logo" />
            <p> 2238 Partha Elen Street,</p>
            <p> New Jersey,</p>
            <p> USA,3322145689,</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/jaminur-islam-022782217/">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Jaminur07260314">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jaminur-islam-022782217/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/jaminur-islam">
                  <i class="fab fa-github-square"></i>
                </a>
              </li>
            </ul>
          </Grid>
          <Grid md={3} item>
            <h3> Useful link </h3>
            <ul>
              <li>Payment & Tax</li>
              <li>Terms of Service</li>
              <li>Your Account </li>
              <li>Privacy </li>
            </ul>
          </Grid>
          <Grid item md={3}></Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
