import React from "react"
import { Link } from "gatsby"

import style from "../styles/footer.module.scss"

const Footer = ({ author }) => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <p>
          &copy; Copyright 2018-{new Date().getFullYear()},{" "}
          <a href="http://humbermediapros.ca">{author}</a>
        </p>
        <ul className="list-unstyled">
<<<<<<< HEAD
          <li className="list-inline-item"><Link to="/">Home</Link></li>
          <li className="list-inline-item"><Link to="/program/wddm">Program</Link></li>
          <li className="list-inline-item"><Link to="/class">Class List</Link></li>
          <li className="list-inline-item"><Link to="/student">Student</Link></li>
=======
          <li className="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/program">Program</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/class">Class List</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/student">Student</Link>
          </li>
>>>>>>> prototype-inclass-merge
        </ul>
      </div>
    </footer>
  )
}

export default Footer
