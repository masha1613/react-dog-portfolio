import {BsFillPatchCheckFill} from 'react-icons/bs'
import '../Experience/Experience.css'

function Experience() {
  return (
    <section id="experience">
    <h5> What Skills I Have</h5>
    <h2> My Experience </h2>

    <div className="container experience__container">
      <div className="experience__frontend">
      <h3> Indoor activities: </h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Eating sausages </h4>
          <small className='text-light'> Experienced </small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Sleeping all day long </h4>
          <small className='text-light'> Experienced </small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Barking at night </h4>
          <small className='text-light'> Experienced </small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Running while sleeping  </h4>
          <small className='text-light'> Intermediate </small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Drinking from the toilet  </h4>
          <small className='text-light'> Experienced </small>
          </div>
          </article>



        </div>

      </div>
      <div className="experience__backend">
      <h3> Outdoor activities: </h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Bringing the ball </h4>
          <small className='text-light'> Experienced </small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Swimming in the pool </h4>
          <small className='text-light'> Basic </small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Licking urine traces </h4>
          <small className='text-light'> Experienced </small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='icon' />
          <div className="info__ex">
          <h4> Fighting with other dogs</h4>
          <small className='text-light'> Intermediate </small>
          </div>
          </article>
        </div>

      </div>

    </div>
    </section>
  )
}

export default Experience
