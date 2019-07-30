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
<<<<<<< HEAD
<Layout>

   <img src={humberEventSvg} className={style.heroImag} alt="Responsive image" />

   <div className="card text-center  " className={style.midcard} >
   <div className="card-body">
    <h5 className="card-title" className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h5><br/>
    <p className="card-text"><small>The Faculty of Media and Creative Arts invites you to attend our 2019 MEDIA PROS Grad Show. Join our students from the one-year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</small></p>
   </div>
=======
    <Layout>
           
      <img src={humberEventSvg} className={style.heroImag} alt="Responsive image" />
      
    <h2 className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h2>
    <blockquote className="blockquote text-center">
    <p className="mb-0"  className={style.midtext} ><small>Humber invites you to attend our 2019 MEDIA PROS Grad Show. Join our students from the one year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</small></p>
    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>

 <div className="row " >
    <div className="col-sm card border-light mb-3" >
     <div className="card-header">Graphic Design For Print & Web</div>
     <div className="card-body">
     <p className="card-text">Graphic design is the process of visual communication and problem-solving through the use of typography, photography, and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously. Graphic designers create and combine symbols, images and text to form visual representations of ideas and messages. They use typography, visual arts, and page layout techniques to create visual compositions. Common uses of graphic design include corporate design (logos and branding), editorial design (magazines, newspapers and books), wayfinding or environmental design, advertising, web design, communication design, product packaging, and signage.</p>
     <button type="button" className="btn btn-primary btn-sm">Graphic Design For Print & Web</button>
     </div>
   </div>
   <div className="col-sm card border-light mb-3" >
     <div className="card-header">Web Design & Development</div>
     <div className="card-body">
     <p className="card-text">Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating markup then they are also expected to be up to date with web accessibility guidelines.</p>
     <button type="button" className="btn btn-primary btn-sm">Web Design & Development</button>

     </div>
>>>>>>> master
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

<<<<<<< HEAD
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
=======
   <div className="col-sm card border-light mb-3" >
     <div className="card-header">3D Modelling & Visual Effects</div>
     <div className="card-body">
     <p className="card-text">In 3D computer graphics, 3D modeling is the process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software. The product is called a 3D model. Someone who works with 3D models may be referred to as a 3D artist. It can be displayed as a two-dimensional image through a process called 3D rendering or used in a computer simulation of physical phenomena. The model can also be physically created using 3D printing devices.</p>
     <button type="button" className="btn btn-primary btn-sm">3D Modelling & Visual Effects</button>

     </div>
   </div>
</div>
>>>>>>> master

      <Gmap />
      <Slider />

    </Layout>
  )
}

export default Index