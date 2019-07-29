import React from "react"
import Layout from "../components/Layout"
import HeadShot from "../images/Placeholder-Headshot.jpg"
import Placeholder from "../images/640x360.png"
import Iconplaceholder from "../images/Icon-Placeholder.png"
import Socialplaceholder from "../images/social-icon-placeholder.png"

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

      <div style={{ border: "0" }} className="container card mb-3 card-style">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={HeadShot} className="card-img" alt="Student Head Shot" />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h3>Hello, I am</h3>
              <h1 className="card-title">
                <b>YOUR FULL NAME</b>
              </h1>
              <p className="card-text card-style">YOUR PREFERRED TITLE</p>
              <ul class="list-group list-group-horizontal">
                <li style={{ border: "0" }} class="list-group-item">
                  <img
                    src={Socialplaceholder}
                    className="card-img"
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li style={{ border: "0" }} class="list-group-item">
                  <img
                    src={Socialplaceholder}
                    className="card-img"
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li style={{ border: "0" }} class="list-group-item">
                  <img
                    src={Socialplaceholder}
                    className="card-img"
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li style={{ border: "0" }} class="list-group-item">
                  <img
                    src={Socialplaceholder}
                    className="card-img"
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li style={{ border: "0" }} class="list-group-item">
                  <img
                    src={Socialplaceholder}
                    className="card-img"
                    alt="Social Media Icon Placeholder"
                  />
                </li>
              </ul>
              <br />
              {/* -----------------------ABOUT ME SECTION--------------------------------- */}
              <p className="card-text card-style">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit, doloribus facere nihil enim, cupiditate quis perspiciatis
                quo nesciunt eligendi harum mollitia delectus dolore voluptatum
                adipisci, voluptatibus ullam ut molestiae. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Nisi cum sunt laborum
                deserunt placeat ipsa magnam quae. Ut expedita, dolore
                voluptatibus reiciendis minus voluptatum eum maiores enim vitae
                totam aliquam!
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />

      {/* -----------------SKILLS & EXPERIENCE SECTION---------------- */}

      <div class="container">
        <div style={{ border: "0" }} className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Skills & Experience</h5>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <div style={{ border: "0" }} class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Skills</h5>
                <ul class="list-group list-group-horizontal">
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                </ul>
                {/* <a href="#" class="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
            <div style={{ border: "0" }} class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Experience</h5>
                <ul class="list-group list-group-horizontal">
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                </ul>
                {/* <a href="#" class="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div style={{ border: "0" }} class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Education</h5>
                <ul class="list-group list-group-horizontal">
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                </ul>
                {/* <a href="#" class="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
            <div style={{ border: "0" }} class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Technologies</h5>
                <ul class="list-group list-group-horizontal">
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                  <li style={{ border: "0" }} class="list-group-item">
                    <img src={Iconplaceholder} alt="Place Holder Icon" />
                  </li>
                </ul>
                {/* <a href="#" class="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-------------------                   PORTFOLIO SECTION        --------------------------*/}
      <div class="container">
        <div style={{ border: "0" }} className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Featured</h5>
            <p className="card-text">Below are some of featured my projects.</p>
          </div>
        </div>
        <div className="card-deck">
          <div className="card">
            <img
              src={Placeholder}
              className="card-img-top"
              alt="Placeholder image"
            />
            <div className="card-body">
              <h5 className="card-title">Project 111</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam fuga sint beatae perferendis. Ea debitis magni
                eveniet voluptatum consequatur hic odit adipisci sapiente
                distinctio, expedita, nihil reprehenderit quisquam
                necessitatibus fugiat.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" class="card-link">
                Explore More..
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src={Placeholder}
              className="card-img-top"
              alt="Placeholder image"
            />
            <div className="card-body">
              <h5 className="card-title">Project 222</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nam dolore! Eum dolore animi dolores. Quidem
                perferendis incidunt, expedita corrupti quaerat non veritatis,
                ea minima assumenda eaque rem maiores ex?
              </p>
            </div>
            <div className="card-footer">
              <a href="#" class="card-link">
                Explore More..
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src={Placeholder}
              className="card-img-top"
              alt="Placeholder image"
            />
            <div className="card-body">
              <h5 className="card-title">Project 333</h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                est id ipsam quis, tenetur itaque porro sequi enim labore
                voluptatibus ducimus doloribus nemo omnis incidunt voluptas
                magnam non facere reprehenderit!
              </p>
            </div>
            <div className="card-footer">
              <a href="#" class="card-link">
                Explore More..
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </Layout>
  )
}

export default Student
