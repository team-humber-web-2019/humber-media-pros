import React from "react"
import Header from "./Header"
import Footer from "./Footer"

//import "../styles/reset.scss"  // Not needed with Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles/general.scss"
import style from "../styles/layout.module.scss"


// Note we can also use specific Boostrap React Component packages:

// reactstrap >>> https://reactstrap.github.io/components/
//   --> https://github.com/reactstrap/reactstrap

// react-bootstrap >>> https://react-bootstrap.github.io/components/alerts
//   --> https://github.com/react-bootstrap/react-bootstrap

// May also want to consider this plugin at some point:
// https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/


const Layout = ( {children} ) => {
  return (
    <div>
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout