import React from "react"
import Layout from "../../components/Layout"
import ProgramLayout from "../../components/ProgramLayout"

import webBanner from "../../images/web-banner.jpg"
import htmlLogo from "../../images/html-logo.png"
import cssLogo from "../../images/css-logo.png"
import jsLogo from "../../images/js-logo.png"
import reactLogo from "../../images/react-logo.png"
import nodeLogo from "../../images/node-logo.jpg"

import style from "../../styles/program.module.scss"


const visualEffects = () => {
  return (
    <Layout> 
      <ProgramLayout>
        <div>
        <div className={style.heroImg}><img src={webBanner} alt="Web design & development"/></div>
      <h2 className={style.centerText}>3D Modelling and Visual Effects Production</h2>
      <ul className="font-weight-bold">
        <li className="list-inline-item">Credentials: Certificate of Achievement |</li>
        <li className="list-inline-item">Program Length: 2 Semesters |</li>
        <li className="list-inline-item">Program Code: 11671</li>
      </ul>
      <p>Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the 
        conceptual and the technical, as you learn to master visual techniques to bring ideas to life. 
        You will develop skills in modelling, texturing and lighting, as well as in visual effects, 
        compositing and digital cinematography. We employ a teaching process and course structure 
        that requires content created in one course to be used to complete assignments in other courses. 
        This “pipeline” process mirrors that of industry, allowing students to make a seamless transition 
        into a real production environment.</p>

        <p>The program is designed by artists for experienced traditional artists and animators who want 
          to either develop or transition their skill sets for employment in the 3D and visual effects industries. 
          The faculty take their years of industry experience into the classroom, straight from the studio. 
          Their collective experience and passion in the gaming, television and film industries is the driving 
          force that ensures the program meets the current and future needs of the industry.</p>


        <h2 className={style.centerText}>Courses</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Semester</th>
              <th scope="col">Second Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Digital Painting</td>
              <td>Technical Animation and Particles</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>3D Lightning and Rendering</td>
              <td>Modeling for Production</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Inorganic Modelling</td>
              <td>VFX Shot Developments</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>CG Foundations and Technology</td>
              <td>3D Post-Production</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>3D Sculpting</td>
              <td>Demo Production</td>
            </tr>
          </tbody>
        </table> 

        <h2 className={style.centerText}>Skills</h2>         
        <div className="row" className={style.formatRow}>
          <img src={htmlLogo} alt="Html" className="col-md-2"/>
          <img src={cssLogo} alt="CSS" className="col-md-2" />
          <img src={jsLogo} alt="JavaScript" className="col-md-2" />
          <img src={reactLogo} alt="React" className="col-md-2"/>   
          <img src={nodeLogo} alt="Node JS" className="col-md-2"/>       
        </div>        </div>
        </ProgramLayout>
    </Layout>
  )
}
export default visualEffects