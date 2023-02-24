import {BsInstagram} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
import {AiFillFacebook} from 'react-icons/ai'
import '../Header/Header.css'



function HeaderSocials() {
  return (
    <div className='header__socials'>
     <a href='https://www.instagram.com/' target='_blank'> <BsInstagram /> </a>
     <a href='https://vk.com/' target='_blank'> <SlSocialVkontakte /> </a>
     <a href='https://www.facebook.com/' target='_blank'> <AiFillFacebook /> </a>
    </div>
  )
}

export default HeaderSocials
