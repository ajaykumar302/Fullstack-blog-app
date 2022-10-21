import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import './Components/Components.css';

import { Hollywood } from './Components/Hollywood';
import  Tourism  from './Components/Tourism';
import  Technology  from './Components/Technology';
import  Fitness  from './Components/Fitness';
import  Food  from './Components/Food';
import  Card  from './Components/card';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h4>The</h4>
        <h1>Siren</h1>
        
      </div>
    
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Tourism' element={<Tourism />} />
            <Route path='/Technology' element={<Technology />} />
            <Route path='/Hollywood' element={<Hollywood />} />
            <Route path='/Fitness' element={<Fitness />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/:category/:id' element={<Card/>} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
