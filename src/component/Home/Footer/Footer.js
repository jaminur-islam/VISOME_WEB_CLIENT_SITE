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
        color: "rgb(185, 183, 183)",
        marginTop: "50px",
        padding: "50px 0",
      }}
    >
      <Container className="footer_container">
        <Box className="footer_content">
          <Box class="col_item">
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
          </Box>
          <Box className="col_item_2">
            <h3>Useful Links</h3>
            <ul>
              <li>Payment & Tax</li>
              <li>Your Account</li>
              <li>Terms of Service </li>
              <li>Privacy Policy </li>
            </ul>
          </Box>
          <Box className="col_item_2">
            <h3>Our company</h3>
            <ul>
              <li>About</li>
              <li>Media</li>
              <li>Blog </li>
              <li>Contact Us </li>
            </ul>
          </Box>
          <Box className="col_item_2">
            <h3> Subscribe to Newsletter</h3>
            <ul>
              <li>396-987 456 885</li>
              <li>help@visume.link</li>
              <input
                type="text"
                style={{ padding: "10px", marginTop: "10px" }}
              />
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
