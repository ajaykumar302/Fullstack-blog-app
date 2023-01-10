import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Components.css'

function Food() {
  const [food,setFood] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get("https://blogserver-ggnd.onrender.com/food");
      setFood(data.data);
    }
    getData()
  },[])

  return (
    <>
       <div className='main'>

<div className='articals'>
  <h1 className='heading'>Food</h1>
  {
    food.map((e, id) => (
      <Link className='start' to={`/${e.category}/${e.id}`}>
        <div className='card' key={id}>
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
    food.map((e, inx) => (
      <Link className='start' to={`/${e.category}/${e.id}`}>
        <div className='card' key={inx}>
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
  <a href='https://www.flipkart.com/splazos-girls-analogue-stainless-steel-pu-multicolor-set-three-combo-analog-watch-women/p/itmf45qeruphgnzk?pid=WATF45CF7HFECMF5&lid=LSTWATF45CF7HFECMF5GWYVQJ&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=Cj0KCQjwhsmaBhCvARIsAIbEbH4So1ayJpXVxyJ8WH08sq1BdfEqurQ8uaPdUm1B7E2q276PL-PsSs0aAjSUEALw_wcB' target='_blank'>
      <div className='ads5'></div>
      </a>
</div>
</div>
<footer>
 <div className='div'>@kava ajay</div>
</footer>
    </>
   
  )
}

export default Food;
