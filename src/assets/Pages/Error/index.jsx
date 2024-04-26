import { useRouteError } from "react-router-dom"

import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function ErrorPage() {
  const error = useRouteError();
  console.log(error)

  return (<>
    <Nav/>
      <div className='container'>
        <div className="error-content">
          <span className="error-status">{error.status}</span> 
          {/* <span className="error-message">{error.error.message}</span> */}
          <p>Oups! La page que vous demandez n'existe pas</p>
        </div>
      </div>
    <Footer/>
  </>)
}
export default ErrorPage