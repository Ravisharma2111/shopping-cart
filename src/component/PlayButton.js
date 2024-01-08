import React,{useState} from 'react';
import {useContext} from 'react'
import './App.css'
import themeContext from '../context/ContextTheme'

function PlayButton({onSwim,onSwam}) {
const ourTheme = useContext(themeContext)
const[hide,setHide] = useState(false)

    // var condi = false;

    const handleSubmit = () => {
        setHide(!hide)
        // if(condi){
        //     onSwam()
        // }else{
        //     onSwim()
        // }
        // condi = !condi
    }

    
  return (
    <div>
    <div style={{border:'1px solid black',width:'70px',backgroundColor:'black',borderRadius:'5px',paddingLeft:'20px',color:'white',cursor:'pointer'}}  >
      <buttton className={ourTheme} onClick={() => handleSubmit()} >{hide ? 'Pause ⏸️' : 'Play ▶️'}   </buttton>
      </div>
    </div>
  )
}

export default PlayButton
