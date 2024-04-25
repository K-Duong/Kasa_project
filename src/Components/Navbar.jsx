import { Link } from "react-router-dom"
import logo from '../assets/Logo.png'

function Nav(){
  return (
    <nav>
      <img src={logo} alt="logo"/>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/presentation">A propos</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
        </ul>
      </nav>
  )
}
export default Nav