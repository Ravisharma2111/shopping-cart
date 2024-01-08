import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { CounterContext } from "./CounterContext";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Cart = () => {
  const navigate = useNavigate();
  const { setUpdateCart, updateCart } = useContext(CounterContext);

  let ar = JSON.parse(localStorage.getItem("updateCart"));

  const removeItem = (id) => {
    const newList = updateCart.filter((mydata) => mydata.id !== id);
    setUpdateCart(newList);
    localStorage.setItem("updateCart", JSON.stringify(newList));
  };
  const getmtr = () => {
    setUpdateCart(ar);
  };

  const increaseItem = (data) => {
    if (ar) {
      ar.map((kal) => {
        if (kal.id === data.id) {
          return (kal.quantity = kal.quantity + 1);
        }
      });
    }
    localStorage.setItem("updateCart", JSON.stringify(ar));
    setUpdateCart(ar);
  };
  const decreaseItem = (data) => {
    if (ar) {
      ar.map((kal) => {
        if (kal.id === data.id) {
          return (kal.quantity = kal.quantity > 1 ? kal.quantity - 1 : 1);
        }
      });
    }
    localStorage.setItem("updateCart", JSON.stringify(ar));
    setUpdateCart(ar);
  };
  // let agh =  JSON.parse(localStorage.getItem("updateCart"));
  let array = JSON.parse(localStorage.getItem("updateCart"));

  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount:
      ar.reduce((total, mydata) => total + mydata.price * mydata.quantity, 0) *
      100,

    name: "Shoping Cart",
    description: "Some Description",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/razorpay-1649771-1399875.png",
    handler: function (response) {
      alert(response.razorpay_payment_id);
          if (response.razorpay_payment_id !== null) {
        localStorage.removeItem("updateCart");
        setUpdateCart([]);
        navigate("/");
      }
    },
   
  };
  const openPayModal = (options) => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {array.length ? (
        <div>
          {ar?.map((mydata) => {
            return (
              <div>
                <div style={{ paddingTop: "7px" }}>
                  <Paper
                    elevation={6}
                    sx={{
                      p: 2,
                      margin: "auto",
                      maxWidth: 1200,
                      marginBottom: "5px",
                    }}
                  >
                    <Grid container spacing={7}>
                      <Grid
                        item
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <div onClick={() => removeItem(mydata.id)}>
                          <CloseOutlinedIcon />
                        </div>
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <div>
                          <FavoriteBorderOutlinedIcon />
                        </div>
                      </Grid>

                      <Grid item display="flex" justifyContent="space-evenly">
                        <ButtonBase sx={{ width: 200, height: 140 }}>
                          <Img
                            alt="complex"
                            sx={{ width: "290px", height: "150px" }}
                            src={mydata.thumbnail}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container sx>
                        <Grid item xs container direction="column" spacing={0}>
                          <Grid
                            item
                            xs
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Typography variant="subtitle1" component="div">
                              {mydata.title}
                            </Typography>

                            <br />
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm
                          container
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        ><div>
                            <button
                              style={{ borderRadius: "52%" }}
                              onClick={() => increaseItem(mydata)}
                            >
                              +
                            </button>
                            &nbsp;&nbsp;
                            <span> {mydata.quantity}</span> &nbsp;&nbsp;
                            <button
                              style={{ borderRadius: "50%" }}
                              onClick={() => decreaseItem(mydata)}
                            >
                              -
                            </button>
                          </div>
                        </Grid>
                        <Grid
                          item
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography variant="subtitle1" component="div">
                            ₹{mydata.quantity * mydata.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              </div>
            );
          })}
          <div
            style={{ display: "flex", justifyContent: "end", width: "95.6%" }}
          >
            <Box sx={{ width: "30%" }}>
              <AppBar position="static">
                <Toolbar>
                  <h2 style={{ flexGrow: 5 }}>Total Price:</h2>

                  <h1 style={{ justifyContent: "space-evenly" }}>
                    ₹
                    {ar.reduce(
                      (total, mydata) => total + mydata.price * mydata.quantity,
                      0
                    )}
                  </h1>
                </Toolbar>
              </AppBar>
            </Box>
          </div>
          <div
            style={{
              width: "95.6%",
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "5px",
            }}
          >
            <button
              style={{
                width: "110px",
                height: "50px",
                backgroundColor: "#1976d2",
                fontSize: "20px",
                textDecoration:'none',
              }}
              onClick={() => openPayModal(options)}
            >
              <strong> Pay Now </strong>{" "}
            </button>
          </div>

          <div
            style={{ display: "flex", justifyContent: "end", width: "95.6%" }}
          >
            <Button>
              <Link to="/">
                <h3> Continue.. </h3>
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "100%",
                height: 300,
              },
            }}
          >
            <Paper elevation={1}>
              <div>
                <h2
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    textDecoration: "underline",
                    fontFamily: "",
                  }}
                >
                  Your Card Is Empty
                </h2>
                <h1 style={{ textAlign: "center", fontFamily: "" }}>
                  {" "}
                  Please Add Some Product{" "}
                </h1>
                <h2 style={{ textAlign: "center", fontFamily: "" }}>
                  Go to Home Page...{" "}
                  <Button>
                    {" "}
                    <Link to="/"> Click Here </Link>{" "}
                  </Button>{" "}
                </h2>
              </div>
            </Paper>
          </Box>
        </div>
      )}
    </div>
  );
};
export default Cart;
