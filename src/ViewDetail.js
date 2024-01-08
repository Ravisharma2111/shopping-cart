import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import StarIcon from "@mui/icons-material/Star";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReactImageMagnify from "react-image-magnify";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CounterContext } from "./CounterContext";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import "./App.css"

import Typography from "@mui/material/Typography";
const Img = styled("img")({
  margin: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ViewDetail = ({ passData }) => {
  const [photo, setPhoto] = useState(0);
  const [click, setClick] = useState(0);

  const handleChecked = (data, id) => {
    setPhoto(data);
    setClick(id);
  };

  const { handleAdd } = useContext(CounterContext);

  let array = JSON.parse(localStorage.getItem("updateCart"));
  let f = false;
  array?.map((le) => {
    if (le.id === passData.id) {
      f = true;
    }
  });

  return (
    <div className="body">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "99%",
          height: "420px",
          padding: "2px",
          margin: "2px",
        }}
      >
        <Box>
          {passData?.images?.map((img, id) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  // width: "6%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: id === click ? "2px solid blue " : "1.8px solid ",
                    // padding: "2px",
                    margin: "2px",

                    width: "55px",
                    height: "55px",
                  }}
                  onClick={() => handleChecked(img, id)}
                >
                  <Img
                    alt="complex"
                    onClick={() => handleChecked(img, id)}
                    sx={{ width: "53px", height: "53px" }}
                    src={img}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "center",
            padding: "5px",
            // backgroundColor:'red',
          }}
        >
          <Box
            sx={{
              width: "400px",
            }}
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  isFluidWidth: true,
                  src: photo === 0 ? passData.images[0] : photo,
                },
                largeImage: {
                  src: photo === 0 ? passData.images[0] : photo,
                  width: 1100,
                  height: 1100,
                },
              }}
              style={{ zIndex: 1 }}
            />
          </Box>
          <div>
            <Button
              onClick={() => handleAdd(passData)}
              sx={{
                backgroundColor: "#999966",
                width: "200px",
                height: "58px",
                margin: "10px",
              }}
            >
              {" "}
              <strong> {f ? "Added" : "🛒 Add To Cart"} </strong>{" "}
            </Button>
          </div>
        </Box>

        <Box sx={{ width: "76%", padding: "4px" }}>
          <Typography color="text.secondary">{passData.brand}</Typography>
          <Typography variant="h5" component="div">
            {passData.title}
          </Typography>
          &nbsp;
          <Box sx={{ display: "flex" }}>
            <Button
              size="small"
              variant="contained"
              color="success"
              sx={{
                color: "white",
                height: "25px",
                width: "25px",
                borderRadius: "3px",
              }}
            >
              {passData.rating}
              <StarIcon size="small" />
            </Button>
            &nbsp;
            <Typography color="text.secondary">
              2388 Ratings & 188 Reviews
            </Typography>
          </Box>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <h3>
              ₹
              {(
                passData.price -
                (passData.price * passData.discountPercentage) / 100
              ).toFixed(0)}
            </h3>
            &nbsp;
            <strike>
              <h5> &nbsp; ₹{passData.price}</h5>
            </strike>
            <strong style={{ color: "green" }}>
              &nbsp; {passData.discountPercentage.toFixed(0)}%off
            </strong>
            <InfoOutlinedIcon />
          </Typography>
          <Typography>
            <strong> Description </strong>
            <br />
            <span
              style={{ color: "green", width: "10px", textAlign: "center" }}
            >
              👉 &nbsp;
            </span>

            {passData.description}
          </Typography>
          <br />
          <Box>
            <Typography>
              <strong>Available offers </strong>
            </Typography>

            <Typography gutterottom>
              <span
                style={{ color: "green", width: "10px", textAlign: "center" }}
              >
                ✔
              </span>
              &nbsp; Flipkart Pay Later &nbsp;
              <span
                style={{
                  border: "1px solid black",
                  width: "10px",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              >
                ❔
              </span>
            </Typography>
            <Typography>
              <span
                style={{ color: "green", width: "10px", textAlign: "center" }}
              >
                ✔
              </span>
              &nbsp; Bank Offer10% off on Citi Credit and Debit Cards, up to
              ₹1500. On orders of ₹5000 and&nbsp;
              <Link to="#" style={{ textDecoration: "none" }}>
                aboveT&C
              </Link>
            </Typography>

            <Typography gutterBottom>
              <span
                style={{ color: "green", width: "10px", textAlign: "center" }}
              >
                ✔
              </span>
              &nbsp; Bank Offer10% off on Bank of Baroda Credit Cards, up to
              ₹1500. On orders of ₹6000 and&nbsp;
              <Link to="#" style={{ textDecoration: "none" }}>
                aboveT&C
              </Link>
            </Typography>
            <Typography gutterBottom>
              <Link to="#" style={{ textDecoration: "none" }}>
                <strong> View 3 more offers </strong>
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography>
              <Img
                src={passData.thumbnail}
                sx={{ width: "30px", height: "30px" }}
              />

              <strong> 6 Months Manufacturer Warranty </strong>
              <Link to="#" style={{ textDecoration: "none" }}>
                Know More
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              pt: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "20%", pt: "10px" }}>
              <Typography color="text.secondary">
                <strong> Delivery </strong>
              </Typography>
            </Box>

            <Box sx={{ width: "81%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  textAlign: "center",
                }}
              >
                <LocationOnOutlinedIcon sx={{ color: "black", my: 0.5 }} />
                <TextField
                  label="Enter Delivery Pincode"
                  variant="standard"
                  size="small"
                />
                <Typography gutterBottom sx={{ color: "black", my: 0.5 }}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <Tooltip title="Enter Pincode" placement="right">
                      <Button>Check</Button>
                    </Tooltip>
                  </Link>
                </Typography>
              </Box>

              <Box sx={{ ml: 3.8 }}>
                <Typography>
                  <strong>Usually delivered in 7 days</strong> &nbsp;
                  <span
                    style={{
                      border: "1px solid black",
                      width: "20px",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    ❔
                  </span>
                </Typography>

                <Typography>
                  <i>Enter pincode for exact delivery dates/charges</i>
                </Typography>

                <Typography>
                  <strong>Go to Cart Page </strong>
                  <Link style={{ textDecoration: "none" }} to="/cart">
                    .....
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ViewDetail;
