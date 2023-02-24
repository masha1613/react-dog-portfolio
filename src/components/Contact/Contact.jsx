import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import '../../components/Contact/Contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9sp3xdj', 'template_79pq52k', form.current, '2EO-Kg7s_BNB2KpBR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  e.target.reset ();
  };

  
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='icon'  />
            <h4>Email</h4>
            <h5>dasein@gmail.com</h5>
            <a href='mailto:mashamiloslavskaya111@gmail.com' target='_blank'> Send a message </a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='icon' />
            <h4>Messenger</h4>
            <h5>Dasein Sobakin</h5>
            <a href='https://m.me/dasein' target='_blank'> Send a message </a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='icon'  />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://wa.me/<+316432212>' target='_blank'> Send a message </a>
          </article>


        </div>

        <form className='contact__form' ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'> Send Message </button>

        </form>


      </div>
    </section>
  )
}

export default Contact
