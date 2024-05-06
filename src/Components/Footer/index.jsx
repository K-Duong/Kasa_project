import logo from '../../Image/Logo.png';
import './_footer.scss';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer