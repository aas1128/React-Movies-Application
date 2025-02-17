import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/movieCard';
import Home from './pages/home';
import {Routes, Route} from "react-router-dom" 
import Favorites from './pages/Favorites';
//name of component is App
//Component is JS code that return JSX(with html mixed in)
function App() {
  
  //whenever you return something you can only return 1 parent elementn
  return (
   <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        
      </Routes>

   </main>
  
   
  );
 
}


export default App
