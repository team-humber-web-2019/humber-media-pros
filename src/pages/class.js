import React from "react"
import Layout from "../components/Layout"
import style from "../styles/class.module.scss"
import profile from "../images/profile.jpg"
import { Link } from "gatsby"

const Class = () => {
  return (
    <Layout>
      {/* <h2>Class List</h2>
      <p>Here's a list of students in a particular program. We should also have some ways to filter the students as well, perhaps by expertise/skills.</p>
      <p>Consider we could also show <em>all</em> students here from all programs who are participating, then filter by program (if desired). What are the benefits of either?</p> */}
      <div className="classlistcont">
        <h1>Web Design and Development</h1>
        <br></br>
        <div className="classlistdescription">
        <h2>Class List</h2>
        <p>Here you will be able to view the 2019 Web Design and Development program students and see their preferred job positions.
        </p>
        </div>
        <ul className ={style.studentlistcontainer}>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className={style.infocontainer}>
              <div className ={style.name}><p> Kyle  Brown</p></div>
              <div className ={style.jobtitle}><p>Front-End Developer</p></div>
              <div className = {style.buttoncont}>
              <button type="button" className="btn btn-outline-info mt-3 mb-4 btn-sm">More info</button>
              </div>
            </div>
          </li>
        </ul>
        <ul className={style.pagenationcontainer}>
          <li><Link to="/class">1</Link></li>
          <li><Link to="/class">2</Link></li>
          <li><Link to="/class">3</Link></li>
          <li><Link to="/class">4</Link></li>
          <li><Link to="/class">5</Link></li>
        </ul>
    </div>
    </Layout>
  )
}

export default Class