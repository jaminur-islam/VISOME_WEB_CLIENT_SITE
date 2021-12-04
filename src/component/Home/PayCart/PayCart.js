import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./PayCart.css";
import Cart from "../Cart/Cart";

const PayCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://evening-lowlands-63101.herokuapp.com/cart")
      .then((res) => res.json())
      .then((result) => {
        setCart(result);
      });
  }, []);
  return (
    <Container id="cart">
      <Typography variant="p" style={{ color: "#51C9FF", fontSize: "19px" }}>
        Pricing
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
        How much to pay?
      </Typography>
      <Typography
        style={{
          marginBottom: "20px",
          fontWeight: "bold",
          width: "50%",
        }}
      >
        You can choose the most app pricing option for your needs.
      </Typography>
      <Grid container spacing={5} sx={{ padding: "40px 0" }}>
        {cart.map((singleCart) => (
          <Cart key={singleCart._id} singleCart={singleCart}>
            {" "}
          </Cart>
        ))}
      </Grid>
    </Container>
  );
};

export default PayCart;
