import React from "react"
import Layout from "../components/Layout"
import style from "../styles/class.module.scss"
import profile from "../images/profile.jpg"
const Class = () => {
  return (
    <Layout>
      {/* <h2>Class List</h2>
      <p>Here's a list of students in a particular program. We should also have some ways to filter the students as well, perhaps by expertise/skills.</p>
      <p>Consider we could also show <em>all</em> students here from all programs who are participating, then filter by program (if desired). What are the benefits of either?</p> */}
      <div className={style.classlistcont}>
        <h1>Web Design and Development</h1>
        <br></br>
        <div className={style.classlistdescription}>
        <h2>Class List</h2>
        <p>Here you will be able to view the 2019 Web Design and Development program students and see their preferred job positions.
        Click on a students portrait shot for more information about them as well as a link to their portfolios or a preview of their school projects.
        </p>
        </div>
        <ul className ={style.studentlistcontainer}>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
          <li className={style.student}>
            <div id={style.studentimage}>
              <img src={profile}></img>
            </div>
            <div className ={style.name}><p> BHAVANA NAVULURI</p></div>
          < div className ={style.jobtitle}><p>Front-End Developer</p></div>
          </li>
        </ul>
    </div>
    </Layout>
  )
}

export default Class