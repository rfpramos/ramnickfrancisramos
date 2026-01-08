import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p>Send an email through this form or reach me via ramnickfrancisramos@gmail.com </p>
      <br />
      
      <form

        action="https://formspree.io/f/xyzyzyzyz"
        method="POST"
        className='contact__form'
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
          required
          className='contact__input'
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          className='contact__input'
        />
        <textarea
          name='message'
          placeholder='Message'
          required
          rows='5'
          className='contact__textarea'
        />
        <button type='submit' className='btn btn--outline'>
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
