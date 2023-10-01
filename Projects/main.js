import '../App.css'
import React, { useState } from 'react'
import { GoChevronLeft , GoChevronRight} from "react-icons/go";
import { VscQuote } from "react-icons/vsc";





export default function Main() {
const [ ind, setInd] =   useState(0);
  const arr = [
    {
      name: "John Doe",
      post: "Software Engineer",
      description: "John Doe is an experienced software engineer passionate about crafting efficient software solutions. Proficient in both front-end and back-end development, he excels a technology can make a positive societal impact and seeks projects aligned with this vision."
    },
    {
      name: "Jane Smith",
      post: "Product Manager",
      description: "Jane Smith, a seasoned product manager, excels at delivering products that meet user needs e-commerce to SaaS. She excels in market research, translating insights i She believes in building products that solve problems and create meaningful experiences for users."
    },
    {
      name: "Alex Johnson",
      post: "Data Scientist",
      description: "Alex Johnson, a dedicated data scientist, is passionate about extracting insights from cole recommendations that help businesses make informed decisions.\n\nFrom predictive modeling to natural language processing, Alex's expertise covers "
    }
  
  ];
  
  
  
const incri = () =>{
  if(ind + 1 >= arr.length){
    setInd(0);
  }
  else{
    setInd(ind+1);
  }
}
const decri = () =>{
  if (ind -1 <0){
    setInd(arr.length-1)
  }else
  {
    setInd(ind-1);
  }
}
function surp() {
let randomind= Math.floor(Math.random()*arr.length);
setInd(randomind);
}



  return (
    <>

  <div className='maincom'>
  <h1>Our Testimonials</h1>
    <div className="cont">
      <div className='logo'>
     
      </div>
       
          <div style={{display:"flex" , justifycontent:" center", alignitems:" center" , flexDirection:"column" , height:"80px", padding:"30px 0 0 0"}}>
            <h3>{arr[ind].name}</h3>
            <h6>{arr[ind].post}</h6>
            </div>
        
            
    <div className="detail"> 
       <div className='icon'><VscQuote/></div>
       <p>{arr[ind].description}</p>
        <div className='rotate icon'> <VscQuote/></div>
    </div>
    
    <div className="control">
      <div className='lr'>
 <div onClick={decri} style={{
  height:"30px",width:"30px"
 }}>
      <GoChevronLeft/>

 </div>

 <div onClick={incri} style={{
  height:"30px",width:"30px"
 }}>
      <GoChevronRight/>

 </div> 
    
      </div>
    
        <button className='m' onClick={surp} >Surprise me</button>
    </div>
        
    </div>
  </div>
     
    </>
  )
}

