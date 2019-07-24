import React from "react"
import Layout from "../components/Layout"

import style from "../styles/program.module.scss"

const Program = () => {
  return (
    <Layout>
      <h2>Web Design & Development</h2>
      <p>This is the landing page for one of the three programs features at the show. Here would might have some kind of imagery, a description of the program, instructor names, course list, skills logos, etc.</p>
      <p>Here are the three programs as they are featured on Humber's main website:</p>
      <ul>
        <li><a href="https://mediastudies.humber.ca/programs/web-design-and-development.html">Web Design and Development</a></li>
        <li><a href="https://mediastudies.humber.ca/programs/3d.html">3D Modelling and Visual Effects Production</a></li>
        <li><a href="https://mediastudies.humber.ca/programs/graphic-design-for-print-and-web.html">Graphic Design for Print and Web</a></li>
      </ul>
    </Layout>
  )
}
export default Program