import React, { useContext } from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { CounterContext } from "./CounterContext";
import { useParams } from "react-router-dom";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Carddetail({ kl, setPassData }) {
  const { params } = useParams();
  const navigate = useNavigate();
  const { handleAdd } = useContext(CounterContext);

  const details = (kl) => {
    setPassData(kl);
    navigate(`/${params}/${kl.id}`);
  };

  let ar = JSON.parse(localStorage.getItem("updateCart"));
  let f = false;
  ar?.map((el) => {
    if (el.id === kl.id) {
      f = true;
    }
  });

  return (
    <div
      style={{
        height: "310px",
        width: "380px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          border: "1px solid #000",
        }}
      >
        <div style={{ height: "180px", width: "380px" }}>
          <Img src={kl.thumbnail} style={{ height: "100%", width: "100%" }} />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "80%", justifyContent: "space-around" }}>
            <Typography sx={{}} variant="h6">
              {kl.title}
            </Typography>
          </div>
          <div sx={{ width: "15%" }}>
            <Typography sx={{}} variant="h6">
              ₹{kl.price}
            </Typography>
          </div>
        </div>
        <hr />
        <div
          style={{
            height: "18%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <button onClick={() => handleAdd(kl)}>
              {f ? "Added" : "Buy Now"}
            </button>
          </div>
          <div>
            <button onClick={() => details(kl)}> View Details </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Carddetail;
