import React from "react"
import { Link } from "gatsby"
import humberLogoSvg from "../images/humber-logo.svg"

import style from "../styles/header.module.scss"

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link className="nav-link" activeClassName="active" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" activeClassName="active" to="/program">Class List</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" activeClassName="active" to="/class">Program</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" activeClassName="active" to="/student">Student</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="align-middle"><img src={humberLogoSvg} alt="Humber College" /> Humber Media Pros</h1>
    </header>
  )
}

export default Header
