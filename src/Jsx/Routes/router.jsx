import { createBrowserRouter, Outlet} from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import LocationPage from '../Pages/LocationPage';
// import ErrorPage from './Jsx/Pages/ErrorPage';
import PresentationPage from '../Pages/PresentationPage'; 

import Nav from '../Components/Navbar';
import Footer from '../Components/Footer';

import { json } from '../../Data/json';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: "",
        element: <HomePage data={json}/>
      },
      {
        path: 'presentation',
        element: <PresentationPage/>
      },
      {
        path: 'location',
        element: <LocationPage/>
      }
    ]
  },
  
]);

function Root() {
  return (<>
    <Nav/>
    <div className='container'>
      <Outlet/>
    </div>
    <Footer/>
  </>)
};