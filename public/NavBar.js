import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom"

const NavBar = () => {

  return (
    <div>
    <Box sx={{backgroundColor:'white', flexGrow: 4 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          // edge="start"
          color="primary"
          aria-label="menu"
        //   sx={{ mr:  }}
></IconButton>
        
        <Typography variant="h4" component="strong" sx={{ flexGrow: 1, fontSize:'39px'  ,color:'black' }}>
     GharOffice
        </Typography>
  
        <Button  sx={{mr: 60,fontSize:'20px',backgroundColor:'#0080ff' }} color="inherit"><Link to="/"> ContactUs </Link></Button>
        
       <Button sx={{ fontSize:'16px',backgroundColor:'#0080ff'}} color="inherit"><Link to="/"> Login </Link></Button> 
        <Button sx={{ fontSize:'16px',backgroundColor:'white'}} color="inherit"> <Link to="/signup"> SignUp </Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
    </div>
)}
export default NavBar
