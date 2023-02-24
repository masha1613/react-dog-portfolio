import {BsCheck2} from 'react-icons/bs'
import '../Services/Services.css'


function Services() {
  return (
    <section id='services'>
  <h5> What I Offer</h5>
  <h2> Services </h2>

  <div className="container services__container">
    <article className='service'>
      <div className="service__head">
        <h3> HOUSE WORK </h3>
      </div>

      <ul className='service__list'>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Instant cleaning food that fell on the floor </p>
          </li>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Digging holes any size and depth in your garden </p>
          </li>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Professional help for minimizing food waste </p>
          </li>

        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Protection of your house 24/7 </p>
          </li>
    

      </ul>

    </article>

    <article className='service'>
      <div className="service__head">
        <h3> PHISICAL SUPPORT </h3>
      </div>

      <ul className='service__list'>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Bringing back the ball everytime you throw it </p>
          </li>
      </ul>

    </article>

    <article className='service'>
      <div className="service__head">
        <h3> EMOTIONAL SUPPORT </h3>
      </div>

      <ul className='service__list'>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Possibility to pet or hug me any time you feel lonely</p>
          </li>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Listening without interrupting </p>
          </li>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> Unquestining loyalty in all circumstances </p>
          </li>
        <li> 
          <BsCheck2 className='service__list-icon' /> 
          <p> My sencire joy everytime you return home  </p>
          </li>
    

      </ul>

    </article>
  </div>
    </section>
  )
}

export default Services
