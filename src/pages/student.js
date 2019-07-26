import React from "react"
import Layout from "../components/Layout"
import Sunny from "../images/Sunny-Krishnan-Pillai.jpg"
import style from "../styles/student.module.scss"

const Student = () => {
  return (
    <Layout>
      {/* <h2>One Sample Student</h2>
      <p>
        This page will stand-in as a template for a single student's "profile".
        The page may have (for example) their name, a photo (or some type of
        avatar/logo), a brief bio, links (social media, github, homepage, etc),
        contact information, skillset icons, a sample of their work, etc.
      </p> */}

      <div class="card mb-3 card-style">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={Sunny}
              class="card-img"
              alt="Sunny-Krishnan-Pillai-Portfolio-Picture"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Sunny Krishnan Pillai</h5>
              <p class="card-text card-style">
                Over 7 Years of Experience with leading international
                organizations in the fields of Information Technology and
                Business Development. Came in the University Toppers List and
                received Academic Excellence Award from School of Engineering
                and Information Technology - Manipal University Dubai Campus.
                Achieved Scholarship in every semester and passed out with an
                overall CGPA of 9.3 out of 10 for Bachelor of Engineering,
                Computer Science. Honesty, Loyalty and Professionalism shown in
                all aspects of career. Strong Team Player, Focus on Team &
                Individual Results, and Excellent Interpersonal & Behavioral
                Skills.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <div>Key Technical Skills</div>Full Stack / Front End Web
                  Developer. Developed websites and web applications using web
                  development tools like, HTML5, CSS, CSS Frameworks -
                  Bootstrap, Bulma , Vanilla Java Script (ES6), Node JS, React,
                  MongoDB, API Consumption & Creation, GitHub, Bit-Bucket,
                  Visual Studio Code, Atom etc, Prototyping and Designing Using
                  Adobe Creative suites products such as Photoshop, Illustrator,
                  XD, Dreamweaver etc. Knowledge in programming Languages such
                  as Java,VB.net, C and C++ languages. Knowledge in SaaS
                  solutions like BigCommerce - Ecommerce Platform and LinnWorks-
                  Inventory/Order Management System. Excellent knowledge in MS
                  Office- Excel (formulas & functions), PowerPoint, Word, Access
                  etc.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Student
