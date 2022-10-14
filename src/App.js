import React, { useState } from 'react';
import './App.css';
import Navebar from './Component/Navebar';
import Text from './Component/Text';
import About from './Component/About';
import Contact from './Component/Contact';

import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const toggaleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#042743'
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
    
    <Router>
    <Navebar title="Textutils" about="About" mode={mode} toggaleMode={toggaleMode} />
    <div className='container m-3  ' >
    <Routes>
    
    <Route exact path="/" element={<Text mode={mode} />} />
    <Route exact path="About/" element={<About mode={mode}/>} />
    <Route exact path="Contact/" element={<Contact mode={mode} />} />
    
    
    
  </Routes>
  </div>
     
      

        

     
      </Router>
    </>
  );
}



export default App;
