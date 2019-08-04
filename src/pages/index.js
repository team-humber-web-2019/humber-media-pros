import React from "react"
import Layout from "../components/Layout"
import humberEventSvg from "../images/Humber Media Pros - EVENTBRITE-new.png"
import graphicSvg from "../images/graphic.jpeg"
import webSvg from "../images/web.jpeg"
import DSvg from "../images/3D.jpeg"


import Gmap from "../components/Gmap"
import Slider from "../components/Slider"
import { Link } from "gatsby"

import style from "../styles/index.module.scss"

const programs = [
  {name: `Graphic Design`, img: graphicSvg, text: `Motivated. Creative. Innovator. If these words describe you, then our intensive Graphic Design for Print & Web certificate program is for you.`},
  {name: `Web Design`, img: webSvg, text: `If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you.`},
  {name: `3D Design`, img: DSvg, text: `Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life.`},
];

const programCards = programs.map(({name, img, text}, index) => {
  return (
    <div key={index} className="card border-0 shadow mb-5 bg-white rounded" >
      <img src={img} className="card-img-top" alt={name}/>
      <div className="card-body p-3">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div class="card-footer text-muted">
        <Link to="/program" className={style.midcardText}>Read More</Link> 
      </div>
    </div>
  )
})

const Index = () => {

  return (

    <Layout>

      <img src={humberEventSvg} className={style.heroImag} alt="Responsive image" />

      <div className="card text-center  " className={style.midcard} >
        <div className="card-body">
          <h5 className="card-title" className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h5><br/>
          <p className="card-text">The Faculty of Media and Creative Arts invites you to attend our 2019 MEDIA PROS Grad Show. Join our students from the one-year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</p>
        </div>
      </div>
        
      <section  className={style.midcardText}>
        <div className="card-deck text-center">
          {programCards}
        </div>
      </section>

      <Gmap />
      <Slider />

    </Layout>
  )
}

export default Index