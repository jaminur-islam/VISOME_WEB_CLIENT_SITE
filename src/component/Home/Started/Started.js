import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import startimg from "../../img/start.png";
import "../Banner/Banner.css";

const Started = () => {
  return (
    <Container id="start">
      <Grid container sx={{ margin: "80px 0" }}>
        <Grid md={6}>
          <Typography
            variant="p"
            style={{ color: "#51C9FF", fontSize: "19px" }}
          >
            Simple steps to glory
          </Typography>
          <Typography
            style={{
              color: "#010D82",
              fontWeight: "550",
              width: "75%",
              marginBottom: "30px",
            }}
            variant="h4"
          >
            How to get started?
          </Typography>
          <img className="start_img" src={startimg} alt="img" />
        </Grid>
        <Grid md={6} className="start_container_content">
          <Grid container spacing={5}>
            <Grid item md={5}>
              <Paper width="100" height="150" sx={{ padding: "10px" }}>
                <i
                  className="fas fa-user-edit"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>

                <Typography
                  variant="h5"
                  sx={{ color: "#010D82", margin: "15px 0" }}
                >
                  Create an account
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  You need to create an account. You can do this by clicking on
                  the Sign up button above.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={5}>
              <Paper width="100" height="150" sx={{ padding: "10px" }}>
                <i
                  className="far fa-images"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>

                <Typography
                  variant="h5"
                  sx={{ color: "#010D82", margin: "15px 0" }}
                >
                  Choose a theme
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  You need to create an account. You can do this by clicking on
                  the Sign up button above.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={5}>
              <Paper width="100" height="150" sx={{ padding: "10px" }}>
                <i
                  className="far fa-edit"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>
                <Typography
                  variant="h5"
                  sx={{ color: "#010D82", margin: "15px 0" }}
                >
                  Edit on the Web
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  You need to create an account. You can do this by clicking on
                  the Sign up button above.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={5}>
              <Paper width="100" height="150" sx={{ padding: "10px" }}>
                <i
                  className="fas fa-flag"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>
                <Typography
                  variant="h5"
                  sx={{ color: "#010D82", margin: "15px 0", color: "blue" }}
                >
                  Ready to Fly
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  You need to create an account. You can do this by clicking on
                  the Sign up button above.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Started;
