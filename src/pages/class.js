import React from "react"
import Layout from "../components/Layout"
import style from "../styles/class.module.scss"
import profile from "../images/profile.jpg"
import { Link } from "gatsby"

const profilepicture = {
  backgroundImage: 'url(' + profile + ')',
  backgroundSize: 'cover',
  // backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50%'
}

const Class = () => {
  return (
    <Layout>
      <div className={style.heropagecontainer}>
        <div className={style.heropagecontents}>
          <div className={style.herotextcontents}>
            <h1 className={style.pagetitle}>Student List</h1>
            <p>Discover the various new talent in the design, development, and 3d animation industry trained by the Humber Media Pros</p>
          </div>
        </div>
      </div>
      <ul className={[style.tablistcontainer, "nav nav-tabs nav-fill px-5"].join(` `)}>
        <li className="nav-item">
          <a className="nav-link active" href="#">All Students</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Web Design and Development</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Graphic Design for Print and Web</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">3D Animation, Art and Design</a>
        </li>
      </ul>
      <div className={style.listbackground}>
        <ul className={style.studentlistcontainer}>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
          <li className={style.studentcard}>
            <div className={style.profilepic} style={profilepicture}></div>
            <h2 className={style.studentname}>Student Name</h2>
            <p className={style.jobtitle}>Web Developer</p>
            <button type="button" className={style.btnpink}>View Student Profile</button>
          </li>
        </ul>
      </div>
    </Layout >
  )
}

export default Class