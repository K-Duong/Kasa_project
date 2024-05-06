import { NavLink } from "react-router-dom";
import logo from '../../Image/Logo.png';

import './_nav.scss';

function Nav(){
  return (
    <nav>
      <img src={logo} alt="logo"/>
      <ul className='nav-link'>
        <li>
        <NavLink to='/'>Accueil</NavLink>
        </li>
        <li>
        <NavLink  to='/presentation'>A propos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Nav