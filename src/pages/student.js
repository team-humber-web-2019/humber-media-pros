import React from "react"
import Layout from "../components/Layout"
import Sunny from "../images/Sunny-Krishnan-Pillai.jpg"
import Placeholder from "../images/640x360.png"
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
          <div class="col-md-8 ">
            <div class="card-body">
              <h3>Hello, I am</h3>
              <h1 class="card-title">
                <b>SUNNY KRISHNAN PILLAI</b>
              </h1>
              <p class="card-text card-style">
                FRONT-END | FULL STACK WEB DEVELOPER
              </p>

              <a href="#" class="btn btn-primary">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* -----------------------ABOUT ME SECTION--------------------------------- */}

      <div class="container ">
        <div class="row h-100">
          <div class="col-4 h-100">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">ABOUT ME</h5>
                <p class="card-text">
                  Over 7 Years of Experience with leading international
                  organizations in the fields of Information Technology and
                  Business Development. Came in the University Toppers List and
                  received Academic Excellence Award from School of Engineering
                  and Information Technology - Manipal University Dubai Campus.
                  Honesty, Loyalty and Professionalism shown in all aspects of
                  career. Strong Team Player, Focus on Team & Individual
                  Results, and Excellent Interpersonal & Behavioral Skills.
                </p>
                <a href="#" class="btn btn-primary">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
          <div class="col-8 h-100">
            <div class="row">
              <div class="col-sm-6 h-100">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Web Design</h5>
                    <p class="card-text">
                      Full Stack / Front End Web Developer. Developed websites
                      and web applications using web development tools like,
                      HTML5, CSS, CSS Frameworks - Bootstrap, Bulma , Vanilla
                      Java Script (ES6), Node JS, React, MongoDB
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 h-100">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Experience</h5>
                    <p class="card-text">
                      Knowledge in SaaS solutions like BigCommerce - Ecommerce
                      Platform and LinnWorks- Inventory/Order Management System.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Coding</h5>
                    <p class="card-text">
                      Knowledge in programming Languages such as Java,VB.net, C
                      and C++ languages.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">UI Design & Wireframing</h5>
                    <p class="card-text">
                      GitHub, Bit-Bucket, Visual Studio Code, Atom etc,
                      Prototyping and Designing Using Adobe Creative suites
                      products such as Photoshop, Illustrator, XD, Dreamweaver
                      etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/*-------------------                   PORTFOLIO SECTION        --------------------------*/}

      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">My Portfolio</h5>
          <p class="card-text">
            The Portfolio is conveying the quality and experiences of my
            services.{" "}
          </p>
          <a href="#" class="btn btn-primary">
            View my Porfolio
          </a>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img src={Placeholder} class="card-img-top" alt="Placeholder image" />
          <div class="card-body">
            <h5 class="card-title">Project 111</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam fuga sint beatae perferendis. Ea debitis magni eveniet
              voluptatum consequatur hic odit adipisci sapiente distinctio,
              expedita, nihil reprehenderit quisquam necessitatibus fugiat.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">
              See this Project Live
            </a>
          </div>
        </div>
        <div class="card">
          <img src={Placeholder} class="card-img-top" alt="Placeholder image" />
          <div class="card-body">
            <h5 class="card-title">Project 222</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nam dolore! Eum dolore animi dolores. Quidem
              perferendis incidunt, expedita corrupti quaerat non veritatis, ea
              minima assumenda eaque rem maiores ex?
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">
              See this Project Live
            </a>
          </div>
        </div>
        <div class="card">
          <img src={Placeholder} class="card-img-top" alt="Placeholder image" />
          <div class="card-body">
            <h5 class="card-title">Project 333</h5>
            <p class="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui est
              id ipsam quis, tenetur itaque porro sequi enim labore voluptatibus
              ducimus doloribus nemo omnis incidunt voluptas magnam non facere
              reprehenderit!
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">
              See this Project Live
            </a>
          </div>
        </div>
      </div>
      <br />
    </Layout>
  )
}

export default Student
