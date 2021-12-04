import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
  const { handleRegister, loading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { name, email, password } = data || {};
    handleRegister(name, email, password, navigate);
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
        Register Form
      </Typography>
      <Container className="login_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your name*"
            className="input-field"
            type="text"
            {...register("name", { required: true })}
          />
          <input
            placeholder="Your email*"
            type="email"
            {...register("email", { required: true })}
          />

          <input
            placeholder="Your password*"
            type="password"
            className="input-field"
            {...register("password", { required: true })}
          />

          <Link to="/login"> Have account ?</Link>
          <input type="submit" value="Register" />
        </form>
      </Container>
    </Box>
  );
};

export default Register;
