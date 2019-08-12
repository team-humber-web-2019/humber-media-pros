import React from "react"
import { Link } from "gatsby"
import humberLogoSvg from "../images/humber-logo.svg"
import style from "../styles/header.module.scss"


const Header = () => {
  return (
  //   <header  >
  //   <nav className="navbar navbar-expand-lg navbar-light bg-white" >
  //   <Link className="nav-link" to="/"><img src={humberLogoSvg} className={style.headerLogo} alt="Humber College" /><span className="sr-only">(current)</span></Link>
  //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarColor03">
  //   <ul className="navbar-nav mr-auto">
  //    <li className="nav-item">
  //     <Link className="nav-link" to="/program" >Program</Link>
  //    </li>
  //    <li className="nav-item">
  //     <Link className="nav-link" to="/class" >Class List</Link>
  //    </li>
  //    <li className="nav-item">
  //     <Link className="nav-link" to="/student" >Student</Link>
  //    </li>
  //   </ul>
  //  <form className="form-inline  mr-sm-2">
  //   <button className="btn btn-light rounded-0" type="submit">Hire A Graduate</button>
  //  </form>
  //  </div>
  //  </nav>
  // </header>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={humberLogoSvg}
          className={style.headerLogo}
          alt="Humber College"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/program/wddm">
                Program
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/class">
                Class List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/student">
                Student
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Hire A Graduate
            </button>
          </form>
        </div>
      </nav>
    </header>
  )
}

// Event Info >> Scrolls down
// Location >> Scrolls down
// Our Programs >> Scroll down, programs link out
// "Hire a Grad" >> Student list


export default Header