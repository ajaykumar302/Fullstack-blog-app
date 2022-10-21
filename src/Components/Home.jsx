import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Components.css'
 


const Home = () => {
    const [tour,setTour] = useState([]);
    const [tech,setTech] = useState([]);
    const [home,setHome] = useState([]);
    const [story,setStory] = useState([]);
    useEffect(()=>{
      const getData = async () => {
        const data = await axios.get("https://server-blog-project.herokuapp.com/toursim");
        setTour(data.data);
        const tech = await axios.get("https://server-blog-project.herokuapp.com/technology");
      setTech(tech.data);
        const home = await axios.get("https://server-blog-project.herokuapp.com");
        setHome(home.data);
        const story = await axios.get("https://server-blog-project.herokuapp.com/story");
        setStory(story.data);
      }
      getData()
    },[])
  //   const artical = home.data.filter((data) => { return data.type === "Artical" })
  // const story = home.data.filter((data) => { return data.type === "Story" })
 
  return (
    <div>
      <div className='cards'>
        <div className='card1'>
          <img src='https://media.istockphoto.com/photos/hawa-mahal-jaipur-india-picture-id482557081?k=20&m=482557081&s=612x612&w=0&h=LontnFctJTY--euwLwo1fsdkt3YNiDtLoCa2HtDSpnE=' alt='' className='img1' />
        </div>
        <div className='card2'>
          <div className='pic'>
            <img src='https://media.istockphoto.com/photos/body-building-workout-picture-id612262390?k=20&m=612262390&s=612x612&w=0&h=HsDQYDCXgHnniZKliul4hMxiWM5fEb-aF3I-HmeejPc=' alt='' className='img2' />
          </div>
          <div className='pic'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVBYu4R8XwDZX9EOI0NHVQo8HM6MMAAwv0M6q7JIO2m-C1Pkek-4wjUMb_JmCl2pqE4I&usqp=CAU' alt='' className='img2' />
          </div>
        </div>
      </div>
      {/*--------------------- the latest ------------*/}
      <div className='art-head'><h1 className='heading'>Latest</h1></div>
      <div className='latest'>
        {
            home.map((e, id) => (
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
      {/*--------------------- the latest ------------*/}
      <div>

        <div className='main'>

          <div className='articals'>
            <h1 className='heading'>Articals</h1>
            {
              tour.map((e, index) => (
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
                tech.map((e, index) => (
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
            <a href='https://www.flipkart.com/' target='_blank'>
            <div className='ads'></div>
            </a>
           
          </div>
        </div>
      </div>
      {/*--------------------- the story ------------*/}
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
      {/* <div>
        <button onClick={more}>{state ? 'LOADLESS 🠕' :'LOADMORE 🠗'}</button>
      </div> */}
      <footer>
        <div className='div'>@kava ajay</div>
      </footer>
    </div>
  )
}

export default Home