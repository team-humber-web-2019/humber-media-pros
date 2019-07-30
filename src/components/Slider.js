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
  <div className="row">
    <div className={`col-md-8 col-center m-auto ` + style.col + `-` + style.center}>
      <h2>OUR STUDENTS</h2>
      <div id="myCarousel" className={`carousel slide ` + style.carousel + style.slide} data-ride="carousel">
        <ol className={`carousel-indicators ` + style.carousel + `-` + style.indicators}>
          <li data-target="#myCarousel" data-slide-to="0" className={`active ` + style.active}></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
        <div className={`carousel-inner ` + style.carousel + `-` + style.inner}>
          <div className={`item carousel-item active ` + style.item + style.carousel + `-` + style.item + style.active}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle" src={arath} alt="Arath"/></div>
            <p className={`testimonial ` + style.testimonial }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
            <p className={`overview ` + style.overview}><b>Arath Yacob George</b>, Graphic Designer</p>
          </div>
          <div className={`item carousel-item ` + style.item + style.carousel + `-` + style.item}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle" src={ash} alt="Ash"/></div>
            <p className={`testimonial ` + style.testimonial }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className={`overview ` + style.overview}><b>Ashkan Shokri</b>, Web Developer</p>
          </div>
          <div className={`item carousel-item ` + style.item + style.carousel + `-` + style.item}>
            <div className={`img-box ` + style.imagee}><img className="rounded-circle" src={nina} alt="Nina"/></div>
            <p className={`testimonial ` + style.testimonial }>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p className={`overview ` + style.overview}><b>Nina Huang</b>, Web Developer</p>
          </div>
        </div>
        <a className={`carousel-control left carousel-control-prev ` + style.carousel + `-` + style.control + style.left + style.carousel + `-` + style.control + `-` + style.prev} href="#myCarousel" data-slide="prev">
          <i className={`fa fa-angle-left ` + style.fa + style.fa + `-` + style.angle + `-` + style.left}></i>
        </a>
        <a className={`carousel-control right carousel-control-next ` + style.carousel + `-` + style.control + style.left + style.carousel + `-` + style.control + `-` + style.next} href="#myCarousel" data-slide="next">
          <i className={`fa fa-angle-right ` + style.fa + style.fa + `-` + style.angle + `-` + style.right}></i>
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default Slider
