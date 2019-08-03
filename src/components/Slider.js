import React from "react"
import Layout from "../components/Layout"
import ash from "../images/ash.png"
import arath from "../images/arath.png"
import nina from "../images/Nina.jpg"
import '../styles/bootstrap.min.css';
import style from "../styles/slider.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = () => {
  return (
    <>
<div className="container">
  <div className="row text-center ">
    <div className={`col-md-8 col-center m-auto ` + style.col + `-` + style.center}>
    <br/> <br/> <h5>OUR STUDENTS</h5><br/> 
      <div id="myCarousel" className={`carousel slide ` + style.carousel + style.slide} data-ride="carousel">
        
        <div className={`carousel-inner ` + style.carousel + `-` + style.inner}>
          <div className={`item carousel-item active ` + style.item + style.carousel + `-` + style.item + style.active}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle" src={arath} alt="Arath"/></div><br/> 
            <p className={`testimonial ` + style.testimonial }><small>“Rocco is a great teacher…. In just four short months, I learned techniques that I will use over a lifetime to improve my web design skill.  This course is great for anyone.  I highly recommend it.”</small></p>
            <p className={`overview ` + style.overview}><b>Arath Yacob George</b>, Graphic Designer</p>
          </div>
          <div className={`item carousel-item ` + style.item + style.carousel + `-` + style.item}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle" src={ash} alt="Ash"/></div><br/> 
            <p className={`testimonial ` + style.testimonial }><small>“I’ve taken other development classes and this one was by far the most helpful and most practical. My computer skills improved dramatically over the last semester.”</small></p>
            <p className={`overview ` + style.overview}><b>Ashkan Shokri</b>, Web Developer</p>
          </div>
          <div className={`item carousel-item ` + style.item + style.carousel + `-` + style.item}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle" src={nina} alt="Nina"/></div><br/> 
            <p className={`testimonial ` + style.testimonial }><small>“Your class was something I looked forward to waking up to every week! I appreciate your generosity and your authenticity with your students.”</small></p>
            <p className={`overview ` + style.overview}><b>Nina Huang</b>, Web Developer</p>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default Slider
