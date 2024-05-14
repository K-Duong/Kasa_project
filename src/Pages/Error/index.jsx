import { Link, useRouteError } from "react-router-dom"

import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import './_error-page.scss'

function ErrorPage() {
  const error = useRouteError();
  console.log(error)

  return (<>
    <Nav/>
      <div className='container'>
        <div className="error-content">
          <span className="error-status">{error.status || "404"}</span> 
          <span className="error-message">Oups! La page que vous demandez n'existe pas.</span>  
          <Link to="/">Retourner sur la page d'accueil</Link>  
        </div>
      </div>
    <Footer/>
  </>)
}
export default ErrorPage