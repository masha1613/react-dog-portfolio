import photo from '../../images/photo1.png'
import '../Header/Header.css'
import Buttons from './Buttons'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className='container header__container'>
            <h5> Hello I'm</h5>
            <h1> Dasein</h1>
            <h5 className='text-light'>fullstack Dog</h5>
            <Buttons />
            <HeaderSocials />

            <div className='me'>
            <img className='photo' src={photo} />
            </div>

            <a href='#contact' className='scroll__down' > Scroll Down</a>
            

        </div>
    </header>
  )
}

export default Header
