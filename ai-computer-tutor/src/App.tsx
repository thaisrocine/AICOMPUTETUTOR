import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppSideBar from './components/Geral/AppSideBar';
import Home from './components/Pages/Home/home';
import Disciplinas from './components/Pages/Disciplinas/disciplinas';
import About from './components/Pages/About/about';
import Progress from './components/Pages/Progress/progress';

function App() {
  return (

    <div className="App">

 
    <BrowserRouter>


       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
