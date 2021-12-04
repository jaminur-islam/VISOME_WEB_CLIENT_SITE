import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleGoogleSignIn, user, handleLogin, loading } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data || {};
    handleLogin(email, password, navigate);
    reset();
  };

  if (loading) {
    return (
      <CircularProgress sx={{ marginLeft: "500px", marginTop: "100px" }} />
    );
  }
  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Login Form
      </Typography>
      <Container className="login_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Your email*"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Your password*"
            className="input-field"
            {...register("password", { required: true })}
          />

          <Link to="/register"> Register now </Link>
          <input type="submit" value="log in" />
          <Button onClick={() => handleGoogleSignIn(navigate)}>
            {" "}
            Login with google{" "}
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
