/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import {Link} from 'react-router-dom'

import {useEffect, useRef} from 'react'

import Typed from 'typed.js'

import {SiHtml5, SiCss3, SiSemanticuireact} from 'react-icons/si'

import {TbBrandJavascript} from 'react-icons/tb'

import ContactUs from '../ContactUs'

import Navbar from '../Navbar'

import './index.css'

const Home = () => {
  const typedTextRef = useRef(null)

  const onclickScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Hi MySelf Ravichandra Kadavakuti', 'Im a Front-end Developer'],
      typeSpeed: 100,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="home-container">
      <Navbar />
      <div className="image-context-container">
        <div>
          <img
            src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685355397/311431796_1181249342758752_3664529721297008871_n_xxa8d4.jpg"
            alt="profile"
            className="image-fluid"
          />
          <div>
            <h1 className="lg-skill-title">Technical Skills</h1>
            <ul className="lg-skill-list">
              <li className="skill-item">
                <div className="skill-row">
                  <SiHtml5 className="skill-icons" />
                  <p>HTML</p>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-row">
                  <SiCss3 className="skill-icons" />
                  <p>CSS</p>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-row">
                  <TbBrandJavascript className="skill-icons" />
                  <p>JAVASCRIPT</p>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-row">
                  <SiSemanticuireact className="skill-icons" />
                  <p>REACT.JS</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="context-container">
          <span className="context-title" ref={typedTextRef} />
          <p>
            Welcome to my portfolio! I am a passionate and dedicated frontend
            developer with a strong foundation in HTML, CSS, and JavaScript. I
            specialize in creating intuitive and interactive user interfaces
            that deliver exceptional user experiences.
          </p>
          <p>
            Throughout my career, I have worked on various mini projects, honing
            my skills in front-end development and design. My expertise includes
            responsive web design, cross-browser compatibility, and mobile
            optimization, ensuring that websites I create are accessible and
            engaging across different devices.
          </p>
          <p>
            In my portfolio, you will find a collection of projects that
            showcase my abilities and creativity. Each project represents a
            unique challenge I have overcome, highlighting my problem-solving
            skills and attention to detail. I have collaborated with designers,
            UX professionals, and backend developers to create seamless and
            visually stunning websites that not only meet client requirements
            but also exceed user expectations.
          </p>
          <p>
            I am well-versed in popular frontend framework such as React. By
            utilizing these tools effectively, I have created dynamic and
            scalable web applications that provide seamless user experiences. My
            knowledge extends to version control systems like Git, ensuring
            smooth collaboration and efficient code management.
          </p>
          <p>
            As a frontend developer, I believe in staying updated with the
            latest industry trends and technologies. I am constantly learning
            and exploring new techniques to enhance my skills and deliver
            innovative solutions. In my portfolio, you will see my commitment to
            continuous improvement and my willingness to push the boundaries of
            frontend development.
          </p>
          <p>
            I am excited to bring my skills and passion to new projects and
            collaborate with talented individuals or organizations. If you have
            any inquiries or would like to discuss potential opportunities,
            please feel free to get in touch. Thank you for visiting my
            portfolio, and I look forward to hearing from you!
          </p>
          <Link to="/projects">
            <button
              type="button"
              className="projects-btn"
              onClick={onclickScroll}
            >
              Click on Me To Navigate Mini Projects
            </button>
          </Link>
        </div>
      </div>
      <div className="footer-section">
        <div>
          <h1 className="skill-title">Technical Skills</h1>
          <ul className="skill-list">
            <li className="skill-item">
              <div className="skill-row">
                <SiHtml5 className="skill-icons" />
                <p>HTML</p>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-row">
                <SiCss3 className="skill-icons" />
                <p>CSS</p>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-row">
                <TbBrandJavascript className="skill-icons" />
                <p>JAVASCRIPT</p>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-row">
                <SiSemanticuireact className="skill-icons" />
                <p>REACT.JS</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default Home
