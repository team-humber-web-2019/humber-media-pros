import React from "react"
import Layout from "../components/Layout"
import webBanner from "../images/web-banner.jpg"
import htmlLogo from "../images/html-logo.png"
import cssLogo from "../images/css-logo.png"
import jsLogo from "../images/js-logo.png"
import reactLogo from "../images/react-logo.png"
import nodeLogo from "../images/node-logo.jpg"

import style from "../styles/program.module.scss"

const Program = () => {
  return (
    <Layout>
      <div className={style.heroImg}><img src={webBanner} alt="Web design & development"/></div>
      <h2 className={style.centerText}>Web Design & Development</h2>
      <ul className="font-weight-bold">
        <li>Credentials: Certificate of Achievement</li>
        <li>Program Length: 2 Semesters</li>
      </ul>
      <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver,
         then Humber's Web Design and Development certificate program is for you. You will learn 
         to critically analyze problems and apply best practices to plan, design and build websites/
         applications. You will build sites and apps from ground up using the most up-to-date techniques
         and fundamental technologies. You will also learn to tackle technical challenges by developing 
         strong troubleshooting and problem solving skills. The works you create along your journey will 
         be curated into a captivating portfolio website at the end of the program.</p>

        <h2 className={style.centerText}>Skills</h2>
         
        <div className="row" className={style.formatRow}>
          <img src={htmlLogo} alt="" className="col-md-2"/>
          <img src={cssLogo} alt="" className="col-md-2" />
          <img src={jsLogo} alt="" className="col-md-2" />
          <img src={nodeLogo} alt="" className="col-md-2"/>
          <img src={reactLogo} alt="" className="col-md-2"/>          
        </div>

    </Layout>
  )
}
export default Program