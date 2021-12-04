import { Button, Container, Grid, Typography } from "@mui/material";
import { Box, fontWeight } from "@mui/system";
import React from "react";
import aboutImg from "../../img/about.png";

const About = () => {
  return (
    <Box sx={{ margin: "120px 0" }} id="about">
      <Container>
        <Box className="banner-container">
          <Box>
            <Typography
              variant="p"
              style={{
                color: "#51C9FF",
                fontSize: "19px",
              }}
            >
              We’re on a mission
            </Typography>
            <Typography
              variant="h4"
              style={{
                color: "#010D82",
                fontWeight: "550",
                width: "75%",
                margin: "10px 0",
              }}
            >
              About Visume
            </Typography>
            <Typography
              style={{
                color: "blue",
                marginBottom: "20px",
                fontWeight: "bold",
                width: "50%",
              }}
            >
              Trusted by people around 38 countries
            </Typography>

            <Typography
              variant="p"
              style={{ display: "block", width: "75%", fontSize: " 17px" }}
            >
              With the Gen Z going the video way, the future rectruitement is
              going to be through video resumes. It saves the HR people a ton of
              time in screening profiles. And it makes it more human to present
              themseleves than plain texts for the employees.
            </Typography>

            <Typography sx={{ margin: "20px 0" }}>
              20+ years on the video production industry, you’re on the right
              hands.
            </Typography>

            <Button
              sx={{ marginRight: "20px", marginTop: "10px" }}
              variant="contained"
            >
              Get Start
            </Button>
            <Button
              sx={{ marginRight: "20px", marginTop: "10px" }}
              variant="outlined"
            >
              Watch Demo{" "}
            </Button>
          </Box>
          <Box className="banner-img-section">
            <img className="about_img" src={aboutImg} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
