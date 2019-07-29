import React from "react"
// import ReactDOM from "react-dom"
import { Link } from "gatsby"
import landingPage from "../images/landing-page-for-program.jpg"

import style from "../styles/program.module.scss"

const ProgramLayout = ({ children }) => {

  return (
    <>
      <div className={style.program}>
        <div className={style.landingWrapper}>
          <img src={landingPage} alt="landing-page" />
        </div>
        <div className={style.courseDetails}>
          {/* <h2>Web Design & Development</h2>
          <p>This is the landing page for one of the three programs features at the show. Here would might have some kind of imagery, a description of the program, instructor names, course list, skills logos, etc.</p>
          <p>Here are the three programs as they are featured on Humber's main website:</p> */}

          <h1>Programs</h1>
          <ul className={style.programList}>
            <li className={style.secondLi}><Link to="/program/wddm">Web Design and Development</Link></li>            
            <li className={style.firstLi}><Link to="/program/visualEffects">3D Modelling and Visual Effects Production</Link></li>
            <li className={style.thirdLi}><Link to="/program/graphicDesign">Graphic Design for Print and Web</Link></li>
            </ul>
        </div>
      </div>
      {children}
    </>
  )
}
export default ProgramLayout