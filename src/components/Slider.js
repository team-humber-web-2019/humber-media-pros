import React from "react"
import Layout from "../components/Layout"
import ash from "../images/ash.png"
import arath from "../images/arath.png"


const Slider = () => {
  return (
    <>
<div className="container">
  <div className="row">
    <div className="col-md-8 col-center m-auto">
      <h2>OUR STUDENTS</h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
        <div className="carousel-inner">
          <div className="item carousel-item active">
            <div className="img-box"><img src={arath} alt="Arath"/></div>
            <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
            <p className="overview"><b>Arath Yacob George</b>, Graphic Designer</p>
          </div>
          <div className="item carousel-item">
            <div className="img-box"><img src={ash} alt="Ash"/></div>
            <p className="testimonial">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className="overview"><b>Ashkan Shokri</b>, Web Developer</p>
          </div>
          <div className="item carousel-item">
            <div className="img-box"><img src="" alt="Nina"/></div>
            <p className="testimonial">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p className="overview"><b>Nina Huang</b>, Web Developer</p>
          </div>
        </div>
        <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  </div>
</div>
    </>

  )
}
export default Slider
