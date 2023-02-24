
import {FaDog} from 'react-icons/fa'
import '../../components/Footer/Footer.css'

function Footer() {
  return (
    <footer id='footer'>
    <a href='#' className='footer__logo'> <FaDog className='dog__logo'/> </a>

    <ul className='permalinks'>
      <li> <a href='#'> Home </a></li>
      <li> <a href='#about'> About </a></li>
      <li> <a href='#experience'> Experience </a></li>
      <li> <a href='#services'> Services </a></li>
      <li> <a href='#testimonials'> Testimonials </a></li>
      <li> <a href='#contact'> Contact </a></li>
    </ul>

    <div className="footer__copy">
      <small> &copy; Dasein dog. All rights are reserved.</small>

    </div>
    </footer>
  )
}

export default Footer
