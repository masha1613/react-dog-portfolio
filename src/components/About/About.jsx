import Daz from '../../images/daz.jpg'
import '../About/About.css'
import {TbAward} from 'react-icons/tb'
import {GiTreeBranch} from 'react-icons/gi'
import {TfiHandDrag} from 'react-icons/tfi'

function About() {
  return (
    <section id='about'>
    <h5> Get To Know </h5>
    <h1> About Me </h1>

    <div className="container about__container">
      <div className="about__me">

        <div className="about__me-image">
        <img src={Daz}></img>
        </div>

      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <TbAward className='icon' />
            <h5> Experience </h5>
            <small> 2+ years being a dog </small>
          </article>


          <article className='about__card'>
          <TfiHandDrag className='icon' />
            <h5> People </h5>
            <small> 200+ petted me worldwide </small>
          </article>


          <article className='about__card'>
          <GiTreeBranch className='icon' /> 
            <h5> Bushes</h5>
            <small> 2000+ got sniffed </small>
          </article>
        </div>

        <p>
Hello! My name is Dasein, I am very good at being a dog. I was born in Russia, but I moved to The Netherland in a young age. I understand many languages, but don't speak any of them except barking. I would be happy to be your friend and taste your food
        </p>

        <a href='#contact' className='btn btn-primary'> Let's Talk </a>

      </div>
    </div>
    </section>
  )
}

export default About
