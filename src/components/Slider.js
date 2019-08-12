import React from "react"
import ash from "../images/ash.png"
import arath from "../images/arath.png"
import nina from "../images/Nina.jpg"
// import '../styles/bootstrap.min.css';
import style from "../styles/slider.module.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = () => {
  return (
    <div className={`row my-4`}>
      <div className="col-md-2">
        <a className="carousel-control-prev pl-2" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
      </div>
      <div id="myCarousel" className={`col-md-8 carousel slide ` + style.carousel + style.slide} data-ride="carousel">
        <div className={`carousel-inner ` + style.carousel + `-` + style.inner}>
          <div className={`item carousel-item active ` + style.item + style.carousel + `-` + style.item + style.active}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle img-fluid" src={arath} alt="Arath"/></div><br/> 
            <p className={`testimonial ` + style.testimonial }><small>“Rocco is a great teacher…. In just four short months, I learned techniques that I will use over a lifetime to improve my web design skill.  This course is great for anyone.  I highly recommend it.”</small></p>
            <p className={`overview ` + style.overview}><b>Arath Yacob George</b>, Graphic Designer</p>
          </div>
          <div className={`item carousel-item ` + style.item + style.carousel + `-` + style.item}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle img-fluid" src={ash} alt="Ash"/></div><br/> 
            <p className={`testimonial ` + style.testimonial }><small>“I’ve taken other development classes and this one was by far the most helpful and most practical. My computer skills improved dramatically over the last semester.”</small></p>
            <p className={`overview ` + style.overview}><b>Ashkan Shokri</b>, Web Developer</p>
          </div>
          <div className={`item carousel-item ` + style.item + style.carousel + `-` + style.item}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle img-fluid" src={nina} alt="Nina"/></div><br/> 
            <p className={`testimonial ` + style.testimonial }><small>“Your class was something I looked forward to waking up to every week! I appreciate your generosity and your authenticity with your students.”</small></p>
            <p className={`overview ` + style.overview}><b>Nina Huang</b>, Web Developer</p>
          </div>
        </div>
       
      </div>
      <div className="col-md-2">
        <a className="carousel-control-next pr-2" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
export default Slider
