import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Components.css'
import { Link } from 'react-router-dom'

function Technology() {
  const [tech,setTech] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get("https://blogserver-ggnd.onrender.com/technology");
      setTech(data.data);
    }
    getData()
  },[])
  return (
    <>
       <div className='main'>
    
    <div className='articals'>
    <h1 className='heading'>Technology</h1>
     {
       tech.map((e,index) => (
         <Link className='start' to={`/${e.category}/${e.id}`}>
             <div className='card' key={index}>
               <div className='img'>
                 <img src={e.image} alt='' />
               </div>
               <div className='context'>
                 <h1 className='start'>{e.title}</h1>
                 <p className='id-para'>{e.about}</p>
                 <h4 className='date'>{e.category}/{e.Date}</h4>
               </div>
             </div>
           </Link>
       ))
     }
    </div>
    
    <div className='top-list'>
    <h3 className='heading'>Toppost</h3>
    {
     tech.map((e,index) => (
         <Link className='start' to={`/${e.category}/${e.id}`}>
             <div className='card' key={index}>
               <div className='img'>
                 <img src={e.image} alt='' />
               </div>
               <div className='context'>
                 <h4 className='start'>{e.title}</h4>
                 <h5 className='date'>{e.category}/{e.Date}</h5>
               </div>
             </div>
           </Link>
       ))
     }
     <a href='https://www.flipkart.com/nothing-phone-1-5g-black-256-gb/p/itmf1b0b0b5decdc?pid=MOBGCYGPXKY9H62J&lid=LSTMOBGCYGPXKY9H62J4YQLRG&marketplace=FLIPKART&cmpid=content_mobile_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=Cj0KCQjwhsmaBhCvARIsAIbEbH63H0XAxmXlOv5fC7z5ihdDxmjx8NQ4LHxOQsc9Vn55tHEhGMbNp40aAqU0EALw_wcB' target='_blank'>
           <div className='ads2'></div>
           </a>
    </div>
   </div>
   <footer>
<div className='div'>@kava ajay</div>
</footer>
    </>
   
  )
}

export default Technology