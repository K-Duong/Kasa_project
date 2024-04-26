import { NavLink } from "react-router-dom"
import logo from '../../assets/Logo.png'

function Nav(){
  return (
    <nav>
      <img src={logo} alt="logo"/>
        {/* <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/presentation">A propos</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
         
        </ul> */}
        <NavLink className='nav-link' to='/'>Accueil</NavLink>
        <NavLink className='nav-link' to='/location'>Location</NavLink>
        <NavLink className='nav-link' to='/presentation'>A propos</NavLink>
      </nav>
  )
}
export default Nav