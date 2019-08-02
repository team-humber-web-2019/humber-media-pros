import React from "react"
import Layout from "../components/Layout"
import HeadShot from "../images/Placeholder-Headshot.jpg"
import Placeholder from "../images/640x360.png"
import DW from "../images/svgs/social/direct-website.svg"
import LI from "../images/svgs/social/linkedin-icon-1.svg"
import GH from "../images/svgs/social/github-1.svg"
import FB from "../images/svgs/social/facebook-icon.svg"
import IG from "../images/svgs/social/instagram-2-1.svg"
import L1 from "../images/svgs/languages/css-5.svg"
import L2 from "../images/svgs/languages/html5.svg"
import L3 from "../images/svgs/languages/javascript.png"
import GraphQLFW from "../images/svgs/frameworks-js/graphql.svg"
import GatsbyFW from "../images/svgs/frameworks-js/gatsby.svg"
import ReactFW from "../images/svgs/frameworks-js/react.svg"
import BootStrapFW from "../images/svgs/frameworks-css/bootstrap-4.svg"
import BulmaFW from "../images/svgs/frameworks-css/bulma.png"
import SASSFW from "../images/svgs/frameworks-css/sass-1.svg"
import PS from "../images/svgs/design-tools/adobe-photoshop-cs6.svg"
import AI from "../images/svgs/design-tools/adobe-illustrator-cc.svg"
import XD from "../images/svgs/design-tools/adobe-xd.svg"
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
              <p className="card-text card-style">
                <strong>YOUR PROGRAM</strong>
              </p>
              <p className="card-text card-style">YOUR PREFERRED TITLE</p>
              <ul className="list-group list-group-horizontal">
                <li style={{ border: "0" }} className="list-group-item">
                  <img
                    src={DW}
                    className={style.socialIconStyle}
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li style={{ border: "0" }} className="list-group-item">
                  <img
                    src={LI}
                    className={style.socialIconStyle}
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li style={{ border: "0" }} className="list-group-item">
                  <img
                    src={GH}
                    className={style.socialIconStyle}
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li
                  style={{ border: "0" }}
                  className="{style.socialIconStyle} list-group-item"
                >
                  <img
                    src={FB}
                    className={style.socialIconStyle}
                    alt="Social Media Icon Placeholder"
                  />
                </li>
                <li style={{ border: "0" }} className="list-group-item">
                  <img
                    src={IG}
                    className={style.socialIconStyle}
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
      {/* -----------------SKILLS & EXPERIENCE SECTION---------------- */}

      <div className="container">
        <div style={{ border: "0" }} className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Skills & Experience</h5>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div style={{ border: "0" }} className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Languages</h5>
                <ul className="list-group list-group-horizontal mx-auto">
                  <li
                    style={{ border: "0" }}
                    className="mx-auto list-group-item"
                  >
                    <img
                      src={L1}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={L2}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item  mx-auto"
                  >
                    <img
                      src={L3}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                </ul>
                {/* <a href="#" className="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
            <div style={{ border: "0" }} className="card text-center">
              <div className="card-body">
                <h5 className="card-title">JS Frameworks</h5>
                <ul className="list-group list-group-horizontal mx-auto">
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={GraphQLFW}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={GatsbyFW}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={ReactFW}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                </ul>
                {/* <a href="#" className="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ border: "0" }} className="card text-center">
              <div className="card-body">
                <h5 className="card-title">CSS Frameworks</h5>
                <ul className="list-group list-group-horizontal mx-auto">
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={BootStrapFW}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={BulmaFW}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={SASSFW}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                </ul>
                {/* <a href="#" className="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
            <div style={{ border: "0" }} className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Design Tools</h5>
                <ul className="list-group list-group-horizontal mx-auto">
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={PS}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={AI}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                  <li
                    style={{ border: "0" }}
                    className="list-group-item mx-auto"
                  >
                    <img
                      src={XD}
                      alt="Skill Set Icon"
                      className={style.skillsIconStyle}
                    />
                  </li>
                </ul>
                {/* <a href="#" className="card-link">
                  Explore More..
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-------------------                   PORTFOLIO SECTION        --------------------------*/}
      <div className="container">
        <div style={{ border: "0" }} className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Featured Projects</h5>
            <button type="button" className="btn btn-primary">
              View Portfolio
            </button>
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
              <a href="#" className="card-link">
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
              <a href="#" className="card-link">
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
              <a href="#" className="card-link">
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
