import React from "react"
import Layout from "../components/Layout"

import style from "../styles/class.module.scss"

const Class = () => {
  return (
    <Layout>
      <h2>Class List</h2>
      <p>Here's a list of students in a particular program. We should also have some ways to filter the students as well, perhaps by expertise/skills.</p>
      <p>Consider we could also show <em>all</em> students here from all programs who are participating, then filter by program (if desired). What are the benefits of either?</p>
    </Layout>
  )
}

export default Class