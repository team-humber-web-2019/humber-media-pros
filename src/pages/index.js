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

const Index = () => {
  return (
<Layout>

   <img src={humberEventSvg} className={style.heroImag} alt="Responsive image" />

   <div className="card text-center  " className={style.midcard} >
   <div className="card-body">
    <h5 className="card-title" className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h5><br/>
    <p className="card-text"><small>The Faculty of Media and Creative Arts invites you to attend our 2019 MEDIA PROS Grad Show. Join our students from the one-year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</small></p>
   </div>
   </div>
      
  <section  className={style.midcardText}>
  <div className="card-deck text-center " >
   
    <div className="card border-0 shadow-sm p-3 mb-5 bg-white rounded-0" >
    <Link to="/program" className={style.midcardText} >
    <img src={graphicSvg} class="card-img-top" alt="graphicSvg"/>
    <div className="card-body ">
    <h5 className="card-title ">Graphic Design</h5>
    <p className="card-text"><small>Motivated. Creative. Innovator. If these words describe you, then our intensive Graphic Design for Print & Web certificate program is for you.</small></p>
    <p class="card-text"><small class="text-muted">More</small></p> 
    </div>
    </Link>
    </div>

    <div className="card border-0 shadow-sm p-3 mb-5 bg-white rounded-0" >
    <Link to="/program" className={style.midcardText}>
    <img src={webSvg} class="card-img-top" alt="graphicSvg"/>
    <div className="card-body ">
    <h5 className="card-title ">Web Design</h5>
    <p className="card-text"><small>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you.</small></p>
    <p class="card-text"><small class="text-muted">More</small></p> 
    </div>
    </Link>
    </div>

    <div className="card border-0 shadow-sm p-3 mb-5 bg-white rounded-0">
    <Link to="/program" className={style.midcardText}>
    <img src={DSvg} class="card-img-top" alt="graphicSvg"/>
    <div className="card-body ">
    <h5 className="card-title ">3D Design</h5>
    <p className="card-text"><small>Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life.</small></p>
    <p class="card-text"><small class="text-muted">More</small></p> 
    </div>
    </Link>
    </div>
  
  </div>
  </section>

      <Gmap />
      <Slider />

    </Layout>
  )
}

export default Index