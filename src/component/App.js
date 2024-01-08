import React, { useState, useEffect } from "react";
import "./App.css";
import $ from "jquery";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    $(window).on("scroll", function () {
      const links = $(".navbar a.dot");
      const top = $(window).scrollTop();

      $(".sec").each(function () {
        const id = $(this).attr("id");
        const height = $(this).height();
        const offset = $(this).offset().top - 150;
        if (top >= offset && top < offset + height) {
          setActiveLink(id);
          links.removeClass("active");
          $(".navbar").find(`[data-scroll="${id}"]`).addClass("active");
        }
      });
    });
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            href="#home"
            className={`dot ${activeLink === "home" ? "active" : ""}`}
            data-scroll="home"
          >
            <span>home</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`dot ${activeLink === "about" ? "active" : ""}`}
            data-scroll="about"
          >
            <span>about</span>
          </a>
        </li>
        <li>
          <a
            href="#service"
            className={`dot ${activeLink === "service" ? "active" : ""}`}
            data-scroll="service"
          >
            <span>service</span>
          </a>
        </li>
        <li>
          <a
            href="#project"
            className={`dot ${activeLink === "project" ? "active" : ""}`}
            data-scroll="project"
          >
            <span>project</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`dot ${activeLink === "contact" ? "active" : ""}`}
            data-scroll="contact"
          >
            <span>contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Section = ({ id, children }) => {
  return <section className="sec" id={id}>{children}</section>;
};

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Section id="home"></Section>
      <Section id="about">about</Section>
      <Section id="service">service</Section>
      <Section id="project">project</Section>
      <Section id="contact">contact</Section>
    </div>
  );
}
























// import React,{useState,useReducer} from 'react'
// import AddVideo from './AddVideo'
// import Box from './Box'
// import './App.css'
// import videoDB from './data'
// import PlayButton from './PlayButton'
// import { useContext } from 'react'
// import ContextTheme from '../context/ContextTheme'

// function App() {
//   const themeContext = useContext(ContextTheme);
//   const[editData,setEditData] = useState(null)
//   console.log({themeContext})
//   function videoReducer(video,action){
//     switch(action.type){
//       case 'ADD':
//         return[
//           ...video,{...action.payload,id:video.length+1}
//         ]
//         case 'DELETE':
//         return let data = [...vodeo] 
//          data3
         
         
//          ?.filter((myId) => action.payload  !== myId.id  ) 

//         case 'UPDATE':
//           const index = video.findIndex((v)=> action.payload.id === v.id )
//         let myVideos = [...video]
//         myVideos.splice(index,1,action.payload)
//         setEditData("")
//         return myVideos;

//         default:
//           return video
//     }
//   }




//  const [video, dispatch] = useReducer(videoReducer,videoDB)
//   // const [video,setVideo] = useState(videoDB)

// // const handleRemove = (videoId) => {
// //   dispatch({type:"DELETE",payload:videoId})
// // //  setVideo(video?.filter((myId) => videoId  !== myId.id  ) )
// // console.log(videoId) 
  
// // }
// // const AddOurVideo = (ourData) => {
// //   dispatch({type:"ADD",payload:ourData})
//     //   setVideo([...video, {...ourData, id:video.length+1}])
// //     }
// // const updtaeVideo = (videoss) => {
// // dispatch({type:'UPDATE',payload:videoss})

// //   // const index = video.findIndex(v => v.id === videoss.id)
// // // let myVideos = [...video]
// // // myVideos.splice(index,1,videoss)
// // // setVideo(myVideos)
// // }

// const handleEditVideo = (editData) => {
//   setEditData(video.find(editDA => editData === editDA.id ))
// console.log(editData)
// }

// const [cngColor,setCngColor] = useState("darkMode")

//   return (
//     <div className={cngColor} >
//     <button onClick={() => setCngColor(cngColor === "darkMode" ? "lightMode" : "darkMode")} > Change Color </button>
//     <AddVideo dispatch={dispatch}  editData = {editData}/>
//     {
//       video.map((myData,id) => {
//         return(
//           <div key={myData.id}>
//           <Box 
//           handleEditVideo={handleEditVideo}
//           dispatch={dispatch}
//           verified={myData.verified}
//           title={myData.title}
//           date={myData.date}
//           channel={myData.channel}
//           views={myData.views}
//           id ={myData.id}
//           >
//           <PlayButton onSwam={() => console.log('HeHeHeheheheh')} onSwim={() => console.log("HAHAHAHHAHAHAAHAHA")} />
//           </Box>
         
//           </div>
//         )
//       })
//     }
      
//     </div>
//   )
// }

// export default App
