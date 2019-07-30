import React from "react"
import humberhero from "../images/humber_banner.jpg"


const Gmap = () => {
  return (
    <>
  <section>

    <div className="card mb-3 border-0" >

      <div className="row no-gutters">
       <div className="col-md-4">
         <iframe className="col-" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.4722828418307!2d-79.52446178450406!3d43.59670717912325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b48363bb8245b%3A0xa3cba040ea95ec97!2sHumber+College+Art+Commons!5e0!3m2!1sen!2sca!4v1563983351977!5m2!1sen!2sca"></iframe>    </div>
       <div className="col-md-8">

      <div className="card-body">
        <h5 className="card-title">Date And Time</h5>
        <p className="card-text">Thursday 15th August 2019 <br/> 5:00pm - 8:00pm</p>
        <h5 className="card-title">Location</h5>
        <p className="card-text">3253 Lake Shore Blvd W, <br/> Humber College Art Commons, <br/>Torento ON M8V 1M2 </p>
      </div>
      
    </div>
  </div>
</div>

    </section>
    </>
  )
}

export default Gmap