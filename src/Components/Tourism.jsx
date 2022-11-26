import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Components.css'
import { Link } from 'react-router-dom'

function Tourism() {
  const [tour,setTour] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get("https://node-blog-server-app.herokuapp.com/toursim");
      setTour(data.data);
    }
    getData()
  },[])

  return (
    <>
       <div className='main'>
    
    <div className='articals'>
    <h1 className='heading'>Tourism</h1>
     {
       tour.map((e,index) => (
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
     tour.map((e,index) => (
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
     <a href='https://www.flipkart.com/flipkart-perfect-homes-studio-metal-open-book-shelf/p/itm5b37a30ec838c?pid=BSFG6GDAEYFTWH4G&lid=LSTBSFG6GDAEYFTWH4GYHXRD3&marketplace=FLIPKART&cmpid=content_book-shelf_14841815974_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,549676504535,,,,c,,,,,,,' target='_blank'>
           <div className='ads4'></div>
           </a>
    </div>
   </div>
   <footer>
<div className='div'>@kava ajay</div>
</footer>
    </>
   
  )
}

export default Tourism