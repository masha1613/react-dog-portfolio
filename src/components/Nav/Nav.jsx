import {GiDogHouse} from 'react-icons/gi'
import {SiFurrynetwork} from 'react-icons/si'
import {GiJumpingDog} from 'react-icons/gi'
import {SiDatadog} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'
import '../Nav/Nav.css'
import {useState} from 'react'


function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
    <a href="#" onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <GiDogHouse /> </a>
    <a href="#about" onClick = {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <SiFurrynetwork /> </a>
    <a href="#experience" onClick = {() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <GiJumpingDog /> </a>
    <a href="#services" onClick = {() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <SiDatadog/> </a>
    <a href="#contact" onClick = {() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <AiFillPhone /> </a>
    </nav>
  )
}

export default Nav
