import { Link } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
export const Hollywood = () => {
  const [hollywood,setHollywood] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get("https://server-blog-project.herokuapp.com/hollywood");
      setHollywood(data.data);
    }
    getData()
  },[])

  return (
    <>
       <div className='main'>
    
    <div className='articals'>
    <h1 className='heading'>Hollywood</h1>
     {
       hollywood.map((e,index) => (
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
     hollywood.map((e,index) => (
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
     <a href='https://www.flipkart.com/flipkart-smartbuy-decorative-showpiece-8-cm/p/itmf2e7527eca5ff?pid=SHIFX77W3GHUSES7&lid=LSTSHIFX77W3GHUSES79Z5ZYW&marketplace=FLIPKART&cmpid=content_showpiece-figurine_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=Cj0KCQjwhsmaBhCvARIsAIbEbH7yxQBOm8zk7AL20iCvHZLFNxHqZWdgwWYzhHf_WEHYqGlp9yYyJr0aAr_HEALw_wcB' target='_blank'>
           <div className='ads3'></div>
           </a>
    </div>
   </div>
   <footer>
<div className='div'>@kava ajay</div>
</footer>
    </>
   
  )
}
