import React from "react"
import Layout from "../../components/Layout"
import ProgramLayout from "../../components/ProgramLayout"
import graphicBanner from "../../images/graphic-banner.jpg"
import htmlLogo from "../../images/html-logo.png"
import cssLogo from "../../images/css-logo.png"
import jsLogo from "../../images/js-logo.png"
import reactLogo from "../../images/react-logo.png"
import nodeLogo from "../../images/node-logo.jpg"

import style from "../../styles/program.module.scss"

const graphicDesign = () => {
  return (
    <Layout>
      <ProgramLayout>
        <div>
          <div className={style.heroImg}>
            <img
              src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Web design & development"
            />
          </div>
          <section className="container">
            <h2 className={style.centerText}>
              Graphic Design for Print and Web
            </h2>
            <ul className="font-weight-bold">
              <li className="list-inline-item">
                Credentials: Certificate of Achievement |
              </li>
              <li className="list-inline-item">
                Program Length: 2 Semesters |
              </li>
              <li className="list-inline-item">Program Code: GR911</li>
            </ul>
            <p>
              Motivated. Creative. Innovator. If these words describe you, then
              our intensive Graphic Design for Print & Web certificate program
              is for you. As a student, you will learn the fundamentals of
              design theory and communicate design thinking strategies through
              the use of functional composition, typography, illustration,
              interactive media and web design. Throughout our program, you will
              work towards developing a cutting-edge portfolio filled with
              real-world projects that will help you stand out in the creative
              field of graphic and web design.
            </p>

            <p>
              In order to achieve the best, you will learn from the best. This
              program offers you access to the latest industry standards in
              hardware, design applications and instruction. Our labs are
              equipped with the latest Apple workstations, up-to-date Adobe
              Creative Cloud software and our course instruction is facilitated
              by industry-leading working professionals in their field of
              practice and study. Over the course of the program, you will build
              connections with industry professionals, alumni and community
              partners to help prepare you for future career opportunities,
              through supportive mentorship and coaching.
            </p>
          </section>

          <h2 className={style.centerText}>Skills</h2>
          <div className="row" className={style.formatRow}>
            <img src={htmlLogo} alt="Html" class="col-lg-2" />
            <img src={cssLogo} alt="CSS" class="col-lg-2" />
            <img src={jsLogo} alt="JavaScript" class="col-lg-2" />
            <img src={reactLogo} alt="React" class="col-lg-2" />
            <img src={nodeLogo} alt="Node JS" class="col-lg-2" />
          </div>

          <h2 className={style.centerText}>Courses</h2>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">First Semester</th>
                <th scope="col">Second Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>Adobe Illustrator</td>
                <td>UI Design</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Adobe InDesign</td>
                <td>Adobe InDesign - Advanced</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Adobe Photoshop</td>
                <td>Adobe Illustrator - Advanced</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Web Design and Development</td>
                <td>Web Design and Development - Advanced</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Typography</td>
                <td>Career and Portfolio Development</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProgramLayout>
    </Layout>
  )
}
export default graphicDesign
