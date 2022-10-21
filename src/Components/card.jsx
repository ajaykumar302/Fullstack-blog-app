import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

 

function Card() {
 const {id} = useParams();
 const [item,setItem] = useState(null);

 const [tour,setTour] = useState([]);
 const [tech,setTech] = useState([]);
 const [home,setHome] = useState([]);
 const [story,setStory] = useState([]);
 const [fitness,setFitness] = useState([]);
 const [food,setFood] = useState([]);
 const [hollywood,setHollywood] = useState([]);
 useEffect(()=>{
   const getData = async () => {
     const data = await axios.get("https://server-blog-project.herokuapp.com/toursim");
     setTour(data.data);
     const techdata = await axios.get("https://server-blog-project.herokuapp.com/technology");
   setTech(techdata.data);
     const homedata = await axios.get("https://server-blog-project.herokuapp.com");
     setHome(homedata.data);
     const storydata = await axios.get("https://server-blog-project.herokuapp.com/story");
     setStory(storydata.data);
     const fitdata = await axios.get("https://server-blog-project.herokuapp.com/fitness");
      setFitness(fitdata.data);
      const fooddata = await axios.get("https://server-blog-project.herokuapp.com/food");
      setFood(fooddata.data);
      const hollydata = await axios.get("https://server-blog-project.herokuapp.com/hollywood");
      setHollywood(hollydata.data);

   }
   getData()
 },[id])
 useEffect(() =>{
    const item =
    (tour.find((item) => item.id === parseInt(id)))||
    (tech.find((item) => item.id === parseInt(id)))||
    (home.find((item) => item.id === parseInt(id)))||
    (story.find((item) => item.id === parseInt(id)))||
    (fitness.find((item) => item.id === parseInt(id)))||
    (food.find((item) => item.id === parseInt(id)))||
    (hollywood.find((item) => item.id === parseInt(id)))
    // window.scroll(0, 0)
    if (item) {
      setItem(item)
    }
 },[tour,tech,home,story,fitness,food,hollywood,id])
 console.log(item);


 return(
    <>
      {
        item? (
            <div  className='info' >
            <div className='whole-card'>
            <h1>{item.title}</h1>
            <div > <img src={item.image} alt='' className='id-card'/></div>
            <div className='id-para'> 
             <p>{item.about}</p>
             <p>{item.about}</p>
             </div>
            <div className='footer'> <h4 className='date'>{item.category}-{item.Date}</h4></div>
            </div>  
            </div>
        ) : null
      }
      
      <div className='art-head'><h1 className='heading'>Stories</h1></div>
      <div className='latest'>
        {
          story.map((e, id) => (
            <Link className='start' to={`/${e.category}/${e.id}`}>
            <div className='art' key={id}>
              <div>
                <img src={e.image} alt='' className='art-img' />
              </div>
              <div className='art-para'>
                <h5 className='start'>{e.title}</h5>
                <p className='art-id-para'>{e.about}</p>
                <h5 className='date'>{e.category}/{e.Date}</h5>
              </div>
            </div>
            </Link>
            
          ))

        }

      </div>
      <footer>
        <div className='div'>@kava ajay</div>
      </footer>
    </>
 )
}

export default Card;

// import React, { useContext } from 'react'
// import { store } from './Data'
// import './Components.css'

// function Card() {
//     let [items] = useContext(store)
//     const add = items.filter((data) => { return data.id === "id" })
//     return (
//         <div>
//             {
//                 add.map((e,index) => (
//                     <div key={index}>
//                         <h1>{e.title}</h1>
//                     </div>
//                 )
                   
//                 )
//             }
//         </div>
//     )
// }
// export default Card