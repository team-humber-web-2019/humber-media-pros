import React from "react"
import Layout from "../components/Layout"
import humberEventSvg from "../images/humber-Event.png"
import Gmap from "../components/Gmap"
import Slider from "../components/Slider"

import style from "../styles/index.module.scss"

const Index = () => {
  return (
    <Layout>
           
      <img src={humberEventSvg} className={style.heroImag} alt="Responsive image" />
      
    <h2 className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h2>
    <blockquote className="blockquote text-center">
    <p className="mb-0"  className={style.midtext} ><small>This is the site landing page and will display the primary content banner for the event and all the important details about the event, location and what's being offered. Consider also including direct links to the three programs (for now, just linking them to the same page).</small></p>
    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>

 <div className="row " >
    <div className="col-sm card border-light mb-3" >
     <div className="card-header">Graphic Design For Print & Web</div>
     <div className="card-body">
     <p className="card-text">This is the site landing page and will display the primary content banner for the event and all the important details about the event, location and what's being offered. Consider also including direct links to the three programs (for now, just linking them to the same page).</p>
     </div>
   </div>
   <div className="col-sm card border-light mb-3" >
     <div className="card-header">Graphic Design For Print & Web</div>
     <div className="card-body">
     <p className="card-text">This is the site landing page and will display the primary content banner for the event and all the important details about the event, location and what's being offered. Consider also including direct links to the three programs (for now, just linking them to the same page).</p>
     </div>
   </div>

   <div className="col-sm card border-light mb-3" >
     <div className="card-header">Graphic Design For Print & Web</div>
     <div className="card-body">
     <p className="card-text">This is the site landing page and will display the primary content banner for the event and all the important details about the event, location and what's being offered. Consider also including direct links to the three programs (for now, just linking them to the same page).</p>
     </div>
   </div>
</div>

      <Gmap />
      <Slider />

    </Layout>
  )
}

export default Index
