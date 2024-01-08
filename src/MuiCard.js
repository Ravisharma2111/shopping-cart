import React, { useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Carddetail from "./Carddetail";
import { TailSpin} from "react-loader-spinner"

const MuiMap = ({ setPassData }) => {
  const { params } = useParams();
  const [part, setPart] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const fetchDate = () => {
    setIsLoad(true);
    fetch(`https://dummyjson.com/products/category/${params}`)
      .then((response) => {
        return response.json();
      })
      .then((fata) => {
        setPart(fata);
        setIsLoad(false);
      });
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return isLoad ? (
    <div
      style={{
        fontSize: "40px",
        display: "flex",
        justifyContent: "center",
       backgroundColor:' #ffecb3'
      }}
    >
      
      <h1> <TailSpin
      height="100"
      width="100"
      color='red'
      ariaLabel='loading'/> </h1>
    </div>
  ) : (
    <div>
      <div>
        <Typography
          variant="h2"
          component="div"
          sx={{
            textAlign: "center",
            fontSize: "65px",
            paddingBottom: "10px",
            color: "grey",
            backgroundColor:' #e0e0d1', }}
        >
          <strong style={{ color: "grey" }}>{params}</strong>
        </Typography>
      </div>
      <Grid
        container
        columnGap={3}
        rowGap={5}
        display="flex"
        justifyContent="space-evenly"
      >
        {part?.products?.map((kl) => {
          return (
            <div>
              <Carddetail kl={kl} setPassData={setPassData} />
            </div>
          );
        })}
      </Grid>
    </div>
  )
}
export default MuiMap
