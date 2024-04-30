import { NavLink } from "react-router-dom"
import logo from '../../Image/Logo.png'

function Nav(){
  return (
    <nav>
      <img src={logo} alt="logo"/>
      <ul className='nav-link'>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink  to='/presentation'>A propos</NavLink>
      </ul>
    </nav>
  )
}
export default Nav