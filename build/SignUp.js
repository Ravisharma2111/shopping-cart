import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            textAlign: "center",
            color: "black",
            marginTop: "40px",
            marginLeft: "450px",
            height: "500px",
            width: "450px",
            border: "3px solid black",
            backgroundColor: "lightgrey",
          }}
        >
          <h2 style={{ paddingBottom: "5px" }}> SignUp To GharOffice </h2>
          <hr />
          <FormLabel id="radios" sx={{ color: "black" }}>
            Enter Your Name:
            <div>
              <TextField
                id="outlined-size-small"
                // defaultValue="Small"
                placeholder="Your Name"
                sx={{ m: 1 }}
                size="small"
              />
            </div>
          </FormLabel>

          <FormLabel id="radios" sx={{ color: "black" }}>
            Enter Your Number:
            <div>
              <TextField
                id="outlined-size-small"
                // defaultValue="Small"
                placeholder="Your Number"
                sx={{ m: 1 }}
                size="small"
              />
            </div>
          </FormLabel>

          <FormLabel id="radios" sx={{ color: "black" }}>
            Enter Your Email:
            <div>
              <TextField
                id="outlined-size-small"
                // defaultValue="Small"
                placeholder="Your Email"
                sx={{ m: 1 }}
                size="small"
              />
            </div>
          </FormLabel>

          <FormLabel id="radios" sx={{ color: "black" }}>
            Enter Your Password:
            <div>
              <TextField
                sx={{ m: 1 }}
                id="outlined-size-small"
                placeholder="Password"
                size="small"
              />
            </div>
          </FormLabel>
          <div>
            <Button sx={{ m: 1 }} variant="contained">
              Submit
            </Button>
            <hr/>
          <h3 style={{ margin:'-1px' ,backgroundColor:'' }}>
          Go to Login Page
          <Link to="/"> Login </Link>
          </h3>
          </div>
          
        </div>
      </Box>
    </div>
  );
};

export default SignUp;
