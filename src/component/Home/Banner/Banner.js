import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bannerImg from "../../img/banner.png";
import bannerFooterImg from "../../img/bannerfooter.png";
import "./Banner.css";

const Banner = () => {
  return (
    <Box id="banner">
      <Container>
        <Box className="banner-container">
          <Box>
            <Typography
              variant="p"
              style={{ color: "#51C9FF", fontSize: "19px" }}
            >
              Stand out of the crowd
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
              Create the next gen video Resume
            </Typography>
            <Typography style={{ color: "#84879E", width: "50%" }}>
              Get hired quickly by giving your resume video look it deserves
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
            <img src={bannerImg} alt="banner" />
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", margin: "30px 0" }}>
          <img style={{ width: "100%" }} src={bannerFooterImg} alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
