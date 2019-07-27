import React from "react"
import { Link } from "gatsby"

import style from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <p>&copy; Copyright {new Date().getFullYear()}, <a href="http://humbermediapros.ca">Humber Media Pros</a></p>
        <ul className="list-unstyled">
          <li className="list-inline-item"><Link to="/">Home</Link></li>
          <li className="list-inline-item"><Link to="/program">Program</Link></li>
          <li className="list-inline-item"><Link to="/class">Class List</Link></li>
          <li className="list-inline-item"><Link to="/student">Student</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
