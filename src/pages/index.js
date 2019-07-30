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
    <h5 className="card-title" className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h5>
    <p className="card-text">This is the site landing page and will display the primary content banner for the event and all the important details about the event, location and what's being offered. Consider also including direct links to the three programs (for now, just linking them to the same page).</p>
    <a href="#" class="btn btn-light">Read More</a>
   </div>
   </div>
      
  <section  className={style.midcardText}>
  <div className="card-deck text-center " >
   
    <div className="card border-0 shadow-sm p-3 mb-5 bg-white rounded" >
    <Link to="/program" className={style.midcardText} >
    <img src={graphicSvg} class="card-img-top" alt="graphicSvg"/>
    <div className="card-body ">
    <h5 className="card-title ">Graphic Design</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">More</small></p> 
    </div>
    </Link>
    </div>

    <div className="card border-0 shadow-sm p-3 mb-5 bg-white rounded" >
    <Link to="/program" className={style.midcardText}>
    <img src={webSvg} class="card-img-top" alt="graphicSvg"/>
    <div className="card-body ">
    <h5 className="card-title ">Web Design</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">More</small></p> 
    </div>
    </Link>
    </div>

    <div className="card border-0 shadow-sm p-3 mb-5 bg-white rounded">
    <Link to="/program" className={style.midcardText}>
    <img src={DSvg} class="card-img-top" alt="graphicSvg"/>
    <div className="card-body ">
    <h5 className="card-title ">3D Design</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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