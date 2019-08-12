import React from "react"
import Layout from "../components/Layout"
import humberEventSvg from "../images/Humber Media Pros - EVENTBRITE-new.png"
import graphicSvg from "../images/graphic.jpeg"
import webSvg from "../images/web.jpeg"
import DSvg from "../images/3D.jpeg"

import Slider from "../components/Slider"
import { Link } from "gatsby"

import style from "../styles/index.module.scss"

const programs = [
  {name: `Graphic Design`, img: graphicSvg, text: `Motivated. Creative. Innovator. If these words describe you, then our intensive Graphic Design for Print & Web certificate program is for you.`},
  {name: `Web Design`, img: webSvg, text: `If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you.`},
  {name: `3D Design`, img: DSvg, text: `Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life.`},
];

// .index-module--top-strap---fSBE:nth-child(1) .index-module--card--3u-K7 {

const programCards = programs.map(({name, img, text}, index) => {
  return (
    // <div key={index} className={`flex-column flex-md-row flex-lg-column
    //  d-flex flex-md-wrap flex-lg-nowrap col-12 col-lg-4 px-0 bg-white border-0 rounded shadow ${style.topStrap}`}>
    //   <div className="flex-shrink-1 col-md-6 col-lg-12 px-0"><img src={img} alt={name}  /></div>
    //   <div className="flex-shrink-1 col-md-6 col-lg-12">
    //     <h5 className="card-title">{name}</h5>
    //     <p className="card-text">{text}</p>
    //   </div>
    //   <div className="card-footer flex-shrink-1 col-md-12 text-muted">
    //     <Link to="/program" className={style.midcardText}>Read More</Link> 
    //   </div>
    // </div>
    
    <div className={`col-lg-4 d-flex ${style.program}`}>
      <div key={index} className={`${style.topStrap} d-flex flex-column flex-md-row flex-lg-column flex-md-wrap flex-lg-nowrap align-self-lg-start rounded shadow`}>
       <div className="px-0 col-md-6 col-lg-12"><img src={img} alt={name} /></div>
       <div className="col-md-6 col-lg-12 my-3">
         <h5 className="card-title">{name}</h5>
         <p className="card-text">{text}</p>
       </div>
       <div className="">
         <Link to="/program" className={`btn m-2 ${style.btnProgram}`}>Read More</Link> 
       </div>
      </div>
    </div>
  )
})
// flex-wrap: wrap;
// flex-direction: row;

const Index = () => {

  return (

    <Layout>

      <section className="row">
        <img src={humberEventSvg} className={`${style.heroImag}`} alt="Responsive image" />
      </section>

      <section className={`row ${style.midcard}`}>
        <div className={`container ${style.section}`}>
          <h2 className={style.midheading}>HUMBER MEDIA PROS GRAD SHOW 2019</h2><br/>
          <p>The Faculty of Media and Creative Arts invites you to attend our 2019 MEDIA PROS Grad Show. Join our students from the one-year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</p>
        </div>
      </section>
      
      <section className={`row ${style.programs}`} >
        <div className={`container ${style.section} ${style.midcardText}`}>
          <h1>Who</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt id? Molestiae ab culpa suscipit fugit atque deleniti adipisci sequi facere officia, laudantium iure, exercitationem necessitatibus a impedit, et voluptatem.</p>
          {/* <div className="card-deck text-center"> */}
          <div className="d-flex flex-column flex-lg-row text-center row py-4">
            {programCards}
          </div>
        </div>
      </section>

      <section className={`row ${style.location}`}>
        <div className="container">
          <div className={`row ${style.section} text-center border-0`}>
            <h1 className="col-12 text-left">When & Where</h1>
            <iframe className={`border-0 ${style.gmap} col-md-8`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.4722828418307!2d-79.52446178450406!3d43.59670717912325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b48363bb8245b%3A0xa3cba040ea95ec97!2sHumber+College+Art+Commons!5e0!3m2!1sen!2sca!4v1563983351977!5m2!1sen!2sca">
            </iframe>  
            <article className="col-md-4">
              <div>
                <h4>Location</h4>
                <p>3253 Lake Shore Blvd W, Humber College Art Commons, <br/>Torento ON M8V 1M2 </p>
              </div>  
              <div>
                <h4>Date And Time</h4>
                <p>Thursday 15th August 2019 <br/> 5:00pm - 8:00pm</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="row">
        <div className={`container ${style.section}`}>  
          <h1>OUR STUDENTS</h1>
          <Slider />
        </div>
      </section>
    </Layout>
  )
}

export default Index