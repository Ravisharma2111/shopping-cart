import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { TailSpin} from "react-loader-spinner"

const MuiMap = () => {
   const [isLoading,setIsLoading] = useState(true)
  const [user, setUser] = useState([]);
  const [dataa, setDataa] = useState();
  const fetchData = () => {
    setIsLoading(true)
    fetch("https://dummyjson.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       setUser(data);
        setIsLoading(false)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
console.log('www',dataa)
  return isLoading ? ( <div style={{fontSize:'30px',display:'flex',justifyContent:'center',color:'green',backgroundColor:'#ffe6e6'}} > <h1>  
  <TailSpin
  height="100"
  width="100"
  color='grey'
  ariaLabel='loading' />
  
  </h1> </div>
  ) :  (
    <div style={{backgroundColor:'#ffffcc'}} >
      <div>
        <Typography
          variant="h1"
          component="div"
          sx={{ textAlign: "center", fontSize: "65px", paddingBottom: "18px",color:'#660000' }}
        >
        
          <strong> All Category 🛒 </strong>{" "}
        </Typography>
      </div>

      <Grid container display="flex" justifyContent="space-evenly">
      
        {user?.map((el) => {
          return (
            <div key={el.id} style={{ paddingBottom: "25px" }}>
              <Link to={`/${el}`} style={{ textDecoration: "none" }}>
                <Card
                key={el.id}
                  sx={{
                    border: "1px solid grey",
                    width: 300,
                    borderRadius:'25px',
                    backgroundColor:' #808000',
                    height: 300,
                    display: "flex",
                  }}
                >
                  <CardActionArea orientation="vertical">
                    <Typography
                      sx={{  display: "flex",justifyContent:'center', textAlign: "center"}}
                      variant="h4"
                      component="div"
                      onClick={() => setDataa(el)}
                      
                    >
                      {el}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
export default MuiMap;
