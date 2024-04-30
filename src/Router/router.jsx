import { createBrowserRouter, Outlet} from 'react-router-dom';

import "./_container.scss";

import HomePage from '../Pages/Home';
import LocationPage from '../Pages/Location';
import ErrorPage from '../Pages/Error';
import PresentationPage from '../Pages/Presentation'; 

import Nav from '../Components/Navbar';
import Footer from '../Components/Footer';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,

    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: 'presentation',
        element: <PresentationPage/>
      },
      {
        path: 'location/:id',
        element: <LocationPage/>,

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