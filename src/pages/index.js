import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Search from "../components/search"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Search />
    <br />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
