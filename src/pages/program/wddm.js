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


const wddm = () => {
  return (
    <Layout> 
       <ProgramLayout>
        <div>
        <div className={style.heroImg}><img src={webBanner} alt="Web design & development"/></div>
      <h2 className={style.centerText}>Web Design & Development</h2>
      <ul className="font-weight-bold">
        <li className="list-inline-item">Credentials: Certificate of Achievement |</li>
        <li className="list-inline-item">Program Length: 2 Semesters |</li>
        <li className="list-inline-item">Program Code: WD911</li>
      </ul>
      <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver,
         then Humber's Web Design and Development certificate program is for you. You will learn 
         to critically analyze problems and apply best practices to plan, design and build websites/
         applications. You will build sites and apps from ground up using the most up-to-date techniques
         and fundamental technologies. You will also learn to tackle technical challenges by developing 
         strong troubleshooting and problem solving skills. The works you create along your journey will 
         be curated into a captivating portfolio website at the end of the program.</p>


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
              <td>Applied Web Programming</td>
              <td>Web Application Programming</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Applied Web Design</td>
              <td>Web Application Design</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Tools & Workflow for the Web</td>
              <td>Web Frameworks & Advanced Design</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Web Production Techniques</td>
              <td>Digital Media Production for the Web</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Web Design Planning & Prototyping</td>
              <td>Employment skills & portfolio design</td>
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
        </div>
        </div>
        </ProgramLayout>
    </Layout>
  )
}
export default wddm