import { Container, Typography } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import { Box } from "@mui/system";
import "./Testimonials.css";

const Testimonials = () => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("https://evening-lowlands-63101.herokuapp.com/comments")
      .then((res) => res.json())
      .then((result) => {
        setComment(result);
      });
  }, []);
  return (
    <Box sx={{ margin: "80px 0" }} id="testimonials">
      <Container>
        <Typography variant="p" style={{ color: "#51C9FF", fontSize: "19px" }}>
          Social
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
          What do our customers say?
        </Typography>
        <Box className="slide-container slider_box">
          <Slide className="slider_content">
            {comment.map((slideImage, index) => (
              <div className="each-slide main_slider" key={index}>
                <img src={slideImage.img} alt="" />
                <div>
                  <p>{slideImage.Comment}</p>
                  <h3> {slideImage.name}</h3>
                </div>
              </div>
            ))}
          </Slide>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
