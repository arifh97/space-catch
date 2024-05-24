import logo from '../assets/img/logo.png'
import {Link} from 'react-scroll'

export default function Logo() {
  return (
    <Link to="banner" spy={true} smooth={true} duration={600} offset={0}>
        <img src={logo} alt="site-logo" />
    </Link>
  )
}
