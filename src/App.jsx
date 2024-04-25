// import {useState } from 'react'
// import {createContext } from "react"
import { Routes, Route} from 'react-router-dom' 

import HomePage from './Pages/HomePage';
import LocationPage from './Pages/LocationPage';
import ErrorPage from './Pages/ErrorPage';
import PresentationPage from './Pages/PresentationPage'; 

import Nav from './Components/Navbar';
import Footer from './Components/Footer';

import { json } from './Data/json' 
import './App.css'

//contraintes techniques
///1.Gallery composant: 
///-naviguer vers image précédente et suivante, 
///-pas de bouton pour naviguer si 1 photo
///-La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
//2.Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 

function App() {

    // console.log(json);

  return (
    <>
      <Nav/>
      {/* replace Routes by pages content */}
      <Routes>
        <Route path="/" element={<HomePage data={json}/>} />
        <Route path="/location" element={<LocationPage/>} />
        <Route path="/presentation" element={<PresentationPage/>} />
        <Route path="/error" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
