import React,{useState,useEffect} from 'react'

let intialState = {
    // id:video.length+1,   
    title:'',
    views:'',
    channel:'',
    verified:true,
    date:''
  }


function AddVideo({video,dispatch,editData}) {
    const[ourData,setOurData] = useState(intialState)

      const HandleShow = (e) => { 
      
        setOurData({...ourData,[e.target.name]:e.target.value})
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editData){
          dispatch({type:'UPDATE',payload:ourData})
        }else{
           dispatch({type:"ADD",payload:ourData})
        }
       
       setOurData(intialState)
    }
    useEffect(() => {
        if(editData){
            setOurData(editData)
        }
    },[editData])

  return (
    <div>
      <input value={ourData.title} type='text' name='title' placeholder='Title' onChange={HandleShow} />
      <input value={ourData.views} type='text' name='views' placeholder='Views' onChange={HandleShow} />

      <input value={ourData.date} type='text' name='date' placeholder='Days Ago' onChange={HandleShow} />
      <input value={ourData.channel} type='text' name='channel' placeholder='Channel Name' onChange={HandleShow}/>

        <button onClick={(e) => handleSubmit(e)}> { editData ? "Update Video": "Add Video"} </button>
    </div>
  )
}

export default AddVideo
