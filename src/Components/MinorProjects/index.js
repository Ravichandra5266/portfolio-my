/* eslint-disable react/no-unescaped-entities */
import {useEffect} from 'react'

import Aos from 'aos'

import Navbar from '../Navbar'

import ContactUs from '../ContactUs'

import './index.css'

const MinorProjects = () => {
  useEffect(() => {
    Aos.init()
  })
  return (
    <div className="minor-container">
      <Navbar />
      <div className="minor-projects">
        <h1 className="major-projects-title">Minor Projects</h1>
        <div className="projects">
          <div data-aos="zoom-in-up" className="minor">
            <a href="https://lnkd.in/e9K3C9yZ" className="link">
              <h1 className="project-title">Match Game</h1>
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685543371/match-game-lg-output_vpzudv.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>

          <div data-aos="zoom-in-up" className="minor">
            <a href=" https://lnkd.in/gra-KT4P" className="link">
              <h1 className="project-title">Ipl Dashboard</h1>

              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685543471/ipl-dashboard-team-matches-lg-output-v2_wuyqnz.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>
          <div data-aos="zoom-in-up" className="minor">
            <a href=" https://lnkd.in/eJhTmy2m" className="link">
              <h1 className="project-title">Coin Toss Game</h1>
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685543509/coin-toss-game-lg-output_qre1xp.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>
          <div data-aos="zoom-in-up" className="minor">
            <a href="https://tnrjskrc.ccbp.tech" className="link">
              <h1 className="project-title">Gallery Pic's </h1>
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685543446/gallery-lg-output_ebnqo9.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>
          <div data-aos="zoom-in-up" className="minor">
            <a href="https://lnkd.in/edYBKPGc" className="link">
              <h1 className="project-title">Fruits Game</h1>
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685543435/fruits-counter-lg-output_bhnemb.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>
          <div data-aos="zoom-in-up" className="minor">
            <a href="http://wpjskrc.ccbp.tech" className="link">
              <h1 className="project-title">Wikipedia Search </h1>
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>
          <div data-aos="zoom-in-up" className="minor">
            <a href="https://lnkd.in/eHCi4VfK" className="link">
              <h1 className="project-title">App Store </h1>
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685543408/app-store-lg-output-v2_aoqlxu.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>
          <div data-aos="zoom-in-up" className="minor">
            <a href=" https://lnkd.in/dxnVUyAW" className="link">
              <h1 className="project-title">Github Popular Repos</h1>
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685543387/github-repos-lg-success-output_f4x696.png"
                alt="sample"
                className="jobby-img"
              />
            </a>
          </div>
        </div>
      </div>

      <ContactUs />
    </div>
  )
}
export default MinorProjects
