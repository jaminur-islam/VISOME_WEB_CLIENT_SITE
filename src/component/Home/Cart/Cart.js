import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Cart = ({ singleCart }) => {
  const { audio, music, price, theme, time, type } = singleCart || {};
  return (
    <Grid item>
      <Paper
        className="cart_item"
        sx={{
          width: "300px",
          height: "400px",
          textAlign: "center",
          padding: "12px",
        }}
      >
        <h2 style={{ marginBottom: 3 }}>{type}</h2>
        <h2 style={{ margin: 0 }}>$ {price}</h2>
        <span> per project </span>
        <hr />
        <Box>
          <ul className="list_container">
            <li>✅ {theme} themes </li>
            <li>✅ {music} music files </li>
            <li>✅ {audio} audio effects </li>
            <li>✅ {time} days delivery </li>
            <Button variant="contained" sx={{ marginTop: "50px" }}>
              Get Started
            </Button>
          </ul>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Cart;
