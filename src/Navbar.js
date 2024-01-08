import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CounterContext } from "./CounterContext";
import { useNavigate } from "react-router-dom";

function ButtonAppBar() {
  const {setUpdateCart } = useContext(CounterContext);
  let ar = JSON.parse(localStorage.getItem("updateCart"));
  const navigate = useNavigate();

  const getmtr = () => {
    setUpdateCart(ar);
  };

  const hndleChange = () => {
    navigate("/");
  };

  const hndleCart = () => {
    navigate("/cart");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography  component="div" sx={{ flexGrow: 6 }}>
            <Button color="inherit" onClick={() => hndleChange()}>
              Home
            </Button>
          </Typography>
      
          <div>
            
            <Button color="inherit" onClick={() => hndleCart()}>
              
              {ar ? ar.length : 0}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;