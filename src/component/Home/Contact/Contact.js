import * as React from "react";
import { Button, Container, Typography } from "@mui/material";
import "./Contact.css";
import { Box } from "@mui/system";

const Contact = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", color: "#77D5FF" }}>
        <h2 style={{ marginBottom: 0 }}> Let's Talk </h2>
        <h1 style={{ color: "#010D82" }}>We're here to help you!</h1>
      </Box>
      <form className="contact_form">
        <div>
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="Your email*" />
        </div>
        <div>
          <input type="text" placeholder="Your Mobile Number" />
          <input type="text" placeholder="Education / Profession (optional)" />
        </div>
        <textarea name="" id="" rows="5" placeholder="Your Text"></textarea>
        <br />
        <Button sx={{ margin: "10px" }} variant="contained">
          Let's Talk{" "}
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
