import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { graphql, useStaticQuery } from "gatsby"
// import $ from 'jquery';

import "../styles/general.scss"
import style from "../styles/layout.module.scss"

// import $ from 'jquery';
// import 'popper.js';
// import 'bootstrap';
//import "../styles/reset.scss"  // Not needed with Bootstrap

// import { withPrefix } from "gatsby"
{/* <script async src={withPrefix('site_js/jquery.js')} type="text/javascript" /> */}
{/* <script async src={withPrefix('site_js/popper.js')} type="text/javascript" /> */}




//import $ from "jquery"
// import '../../node_modules/jquery/dist/jquery.min.js'
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import '../../node_modules/popper.js/dist/popper.min'
// import 'bootstrap/js/dist/carousel'


// import './src/sass/app.scss'
// import 'jquery/dist/jquery.min.js'
// import 'popper.js/dist/popper.min'
// import 'bootstrap/dist/js/bootstrap.min.js'


// Note we can also use specific Boostrap React Component packages:

// reactstrap >>> https://reactstrap.github.io/components/
//   --> https://github.com/reactstrap/reactstrap

// react-bootstrap >>> https://react-bootstrap.github.io/components/alerts
//   --> https://github.com/react-bootstrap/react-bootstrap

// May also want to consider this plugin at some point:
// https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/

const Layout = ({ children }) => {
  // Pull in required siteMetadata (from /gatsby-config.js)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          twitter
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      <main className="container-fluid">
        {children}
      </main>
      <Footer author={data.site.siteMetadata.author} />
    </div>
  )
}

export default Layout
