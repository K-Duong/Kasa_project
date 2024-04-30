import { RouterProvider } from 'react-router-dom' 

import { router } from './Router/router'; 

import './App.css'

//contraintes techniques
///1.Gallery composant: 
///-naviguer vers image précédente et suivante, 
///-pas de bouton pour naviguer si 1 photo
///-La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
//2.Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 

function App() {
  return <RouterProvider router={router}/>
  }
export default App
