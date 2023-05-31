/* eslint-disable import/no-extraneous-dependencies */
import {BsLinkedin, BsWhatsapp, BsGithub} from 'react-icons/bs'

import {SiGmail} from 'react-icons/si'

import './index.css'

const ContactUs = () => (
  <>
    <h1 className="contact-title">Contact Us</h1>
    <div className="contact-icons-container">
      <a href="https://www.linkedin.com/in/ravichandrakadavakuti">
        <BsLinkedin className="contact-icons" />
      </a>
      <a href="https://wa.me/7993091099">
        <BsWhatsapp className="contact-icons" />
      </a>
      <a href="https://github.com/Ravichandra5266?tab=repositories">
        <BsGithub className="contact-icons" />
      </a>
      <a href="mailto:krc263458@gmail.com">
        <SiGmail className="contact-icons" />{' '}
      </a>
    </div>
  </>
)

export default ContactUs
