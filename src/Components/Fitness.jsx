import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Components.css'
import { Link } from 'react-router-dom'

function Fitness() {
  const [fitness,setFitness] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get("https://server-blog-project.herokuapp.com/fitness");
      setFitness(data.data);
    }
    getData()
  },[])
  return (
    <>
      <div className='main'>
    
    <div className='articals'>
    <h1 className='heading'>Fitness</h1>
     {
       fitness.map((e,index) => (
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
     fitness.map((e,index) => (
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
     <a href='https://www.flipkart.com/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0?pid=MOBG6VF5Q82T3XRS&lid=LSTMOBG6VF5Q82T3XRSOXJLM9&marketplace=FLIPKART&cmpid=content_mobile_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=Cj0KCQjwhsmaBhCvARIsAIbEbH5MV8v7CxaqzSt8Bqg3BlaXcdSpQa-38jHJaR7KvLzhwfCyUh9Zb4waAr1CEALw_wcB' target='_blank'>
           <div className='ads1'></div>
           </a>
    </div>
    
   </div>
   <footer>
       <div className='div'>@kava ajay</div>
     </footer>
    </>
    
  )
}

export default Fitness