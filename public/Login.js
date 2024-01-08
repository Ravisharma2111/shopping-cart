import React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import Typography from "@mui/material/Typography";
// import NavBar from "./NavBar";

// const theme = createTheme();

export default function Login() {
  return (
    <div>
      <Grid
        container
        sx={{ mt: 8, ml: 18, pb: 26, width: "1250px", height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className="text"
          sx={{
            // mr: -40 ,
            // mb:20,
            backgroundImage:
              "url(https://img.theweek.in/content/dam/week/news/world/images/2020/11/8/flydubai-flight-airplane-reuters.jpg)",
            backgroundColor: "black",
          }}
        />
        <Grid
          item
          className="text1"
          xs={6}
          sm={6}
          md={6}
          sx={{
            mr: -30,
            ml: 4,
            // mb:20,
            backgroundImage:
              "url(https://img.theweek.in/content/dam/week/news/world/images/2020/11/8/flydubai-flight-airplane-reuters.jpg)",
            // backgroundColor: "red",
          }}
        />
        <Grid
          sx={{ backgroundColor: "#c2c2a3" }}
          xs={6}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
        >
          <Box
            sx={{
              // my: 11,
              // mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ mb: -5, mr: 4 }}>
              <h1 style={{ textAlign: "center", color: "#66004d" }}>
                {" "}
                Welcome To Dubai Flight{" "}
              </h1>
            </Typography>

            <Box
              sx={{
                mt: 7,
                ml: -35,
                backgroundColor: "#e0e0d1",
                border: "px solid black",
              }}
            >
              <FacebookIcon
                sx={{ mt: 0, fontSize: "40px", color: "blue" }}
              ></FacebookIcon>
              <Typography sx={{ textAlign: "center" ,mt: -4, ml: 5 }}>
                {" "}
                <Link sx={{ pb: 6,textAlign: "center"  }} href="/">
                  Continue with facaebook{" "}
                </Link>{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                ml: 30,
                mr: 5,
                mt: -4.3,
                backgroundColor: "#e0e0d1",
              }}
            >
              <GoogleIcon
                sx={{ ml: 0, mt: 0, fontSize: "35px", color: "blue" }}
              />
              <Typography sx={{ ml: 4.5, mt: -3.5 }}>
                {" "}
                <Link
                  style={{
                    paddingBottom: "5px",
                    margin: "2px",
                    marginBottom: "10px",
                    textAlign: "center" 
                  }}
                  href="/"

                >
                  Continue with Google{" "}
                </Link>{" "}
              </Typography>
            </Box>

            <Box sx={{}}>
              <Typography sx={{ mt: 2, mb: 2 }}>
                <h2 style={{ textAlign: "center", color: "#39004d" }}> OR </h2>
              </Typography>
              <Grid>
                <div>
                  <TextField
                    margin="normal"
                    size="small"
                    fullWidth
                    label="Email Address"
                    sx={{ mb: 0, mt: 0 }}
                  />
                </div>
                <div>
                  <TextField
                    margin="normal"
                    fullWidth
                    size="small"
                    label="Password"
                  />
                </div>
                <div>
                  <Box sx={{ mt: 0, ml: 17, color: "red" }} item xs>
                    <Link href="/">Forgot password?</Link>
                  </Box>
                </div>
                <div>
                  <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Sign In
                  </Button>
                </div>
                <Box sx={{ mt: 6 }}>
                  If you are New SignUp here.
                  <Link href="/">Sign Up</Link>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

// <FacebookIcon sx = {{ mt:0,mb: 6, fontSize:'40px', color:'blue' }}/>
// <WhatsAppIcon  sx = {{ ml:2 ,mb: 6, fontSize:'40px', color:'green' }}/>
// <GoogleIcon  sx = {{ ml:2 ,mb: 6, fontSize:'40px', color:'green' }}/>
// import React,{useState} from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { FormLabel } from "@mui/material";
// import Button from '@mui/material/Button';
// import {Link} from "react-router-dom";
// import Paper from '@mui/material/Paper';
// import { useNavigate } from 'react-router-dom'
// import Checkbox from '@mui/material/Checkbox';
// // import NavBar from "./NavBar";
// // import "./App.css"

// const Login = () => {
//   let navigate = useNavigate();
//  const [email,setEmail] = useState('')
//  const [password,setPassword] = useState('')
// console.log(email)
// console.log(password)

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if(email == '' || password == '' ){
//     navigate('/')
//   }else{
//   navigate('/home')
// }
// }
//   return (
//     <div>

//       <Box
//         component="form"
//         sx={{
//           "& .MuiTextField-root": {width: "20ch" }
//         }}
//         noValidate
//         autoComplete="off"
//       >
//       <Paper elevation={3} />

//      <div style={{  textAlign:'center' ,color: 'black',marginTop:'60px', marginLeft:'450px' , height:'420px' , width:'420px' ,border:'1px solid black',backgroundColor:'lightgrey' }} >
//      <h2  style={{paddingBottom:'5px'}} > Login To GharOffice  </h2>
//      <hr></hr>
//           <FormLabel id="radios" sx={{color:'black', fontSize:'22px' }} >
//            Enter Your Email:
//            <div>
//           <TextField
//           value={email}
//            type='mail'
//            onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             sx={{m:0.5}}
//             size="small"
//           />
//     </div>
//         </FormLabel>
//         <FormLabel id="radios" sx={{color: 'black' , fontSize:'22px' }}>
//         Enter Your Password:
//         <div>
//           <TextField
//           type='password'
//           value={password}
//           sx={{m:0.5}}
//           onChange={(e) => setPassword(e.target.value)}
//            placeholder="Password"
//             size="small"
//           />
//         </div>
//         </FormLabel>
//         <h3>
//         <Link to="/forgot"> Forgot Password? </Link>
//         </h3>
//         <div>

//          <Button style={{backgroundColor :'red'}} sx={{}} variant="contained" onClick={(e) => handleSubmit(e)} >Submit</Button>
//         </div><hr/>
// If you are New SignUp here.
//         <Link to="/signUp" > SignUp </Link>

//         </div>
//         <Paper />
//       </Box>
//     </div>
//   );
// };

// export default Login;
