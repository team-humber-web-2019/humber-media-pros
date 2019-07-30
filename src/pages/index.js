import React from "react"
import Layout from "../components/Layout"
import humberEventSvg from "../images/humber-Event.png"
import Gmap from "../components/Gmap"
import Slider from "../components/Slider"
import { Link } from "gatsby"

import style from "../styles/index.module.scss"

const Index = () => {
  return (
    <Layout>
           
      <img src={humberEventSvg} className={style.heroImag} alt="Responsive image" />
      
    {/* <h2 className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h2>
    <blockquote className="blockquote text-center">
    <p className="mb-0"  className={style.midtext} ><small>Humber invites you to attend our 2019 MEDIA PROS Grad Show. Join our students from the one year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</small></p>
        </blockquote> */}
  <div className="slider-item overlay" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row slider-text align-items-center justify-content-center">
        <div className="col-lg-12 text-center col-sm-12">
          <h1 className={style.midtext + " text-danger mb-4"} data-aos="fade-up" data-aos-delay="100">HUMBER MEDIA PROS GRAD SHOW 2019</h1>
        </div>
      </div>
    </div>
  </div>
 

        <div className="section">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="service text-center" data-aos="fade-up" data-aos-delay="">
            <span className="icon icon-paper-plane mb-4 d-block"></span>
            <h3><Link to="/program/wddm">Web Design & Development</Link></h3>
            <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The works you create along your journey will be curated into a captivating portfolio website at the end of the program.</p>
          </div>
        </div>
        <div className="col">
          <div className="service text-center" data-aos="fade-up" data-aos-delay="100">
            <span className="icon icon-screen-desktop mb-4 d-block"></span>
            <h3><Link to="/program/graphicDesign">Graphic Design For Print & Web</Link></h3>
            <p>Motivated. Creative. Innovator. If these words describe you, then our intensive Graphic Design for Print & Web certificate program is for you. As a student, you will learn the fundamentals of design theory and communicate design thinking strategies through the use of functional composition, typography, illustration, interactive media and web design. Throughout our program, you will work towards developing a cutting-edge portfolio filled with real-world projects that will help you stand out in the creative field of graphic and web design.</p>
          </div>
        </div>
        <div className="col">
          <div className="service text-center" data-aos="fade-up" data-aos-delay="200">
            <span className="icon icon-screen-smartphone mb-4 d-block"></span>
            <h3><Link to="/program/visualEffects">Graphic Design For Print & Web</Link></h3>
            <p>Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life. You will develop skills in modelling, texturing and lighting, as well as in visual effects, compositing and digital cinematography. We employ a teaching process and course structure that requires content created in one course to be used to complete assignments in other courses. This “pipeline” process mirrors that of industry, allowing students to make a seamless transition into a real production environment.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

      <Gmap />
      <Slider />

    </Layout>
  )
}

export default Index