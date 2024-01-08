import { Button } from '@mui/material';
import React from 'react';
// import photo from './photo.jpg';

export default function Box({title,date,channel,views,id,verified,children,dispatch,handleEditVideo}) {
  return (
    <div >
    <div style={{paddingTop:"20px" ,position:'relative'}} >
    <div style={{position:'absolute',left:'120px',cursor:'pointer'}} onClick={() => handleEditVideo(id)} > ❤️ </div>
    <div style={{position:'absolute',left:'160px',cursor:'pointer'}} onClick={() =>  dispatch({type:"DELETE",payload:id})} > ⚪ </div>
    <div>
   <img src={`https://picsum.photos/id/${id}/160/90`}/>
   </div>
      <strong>{title}</strong>
      <div>
      <span>{views}</span>
      &nbsp; &nbsp;
      <span>{date}</span>
     
      </div>
      <strong>{channel} {verified && '✅'}</strong>
   
   <div>{children}</div>
      </div>
       </div>
  )
}
