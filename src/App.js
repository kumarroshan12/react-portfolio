
import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Router>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='skills' element={<Skills />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='contact' element={<Contact />}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
