import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CreateSession from "../components/createsession"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there</h1>
    <p>Welcome to Gestaponline</p>
    <p>Inspired by the great <a href="https://www.secrethitler.com" target="_blank">Secret Hitler</a> game, we have created this platform to survive our quarantine during Covid-19 situation</p>
    <p>All the rules are <a href="https://cdn.vapid.site/sites/a67e0c72-4902-4365-a899-3386df73c2c4/assets/Secret_Hitler_Rules-023bc755617986cb2276a3b6920e43e0.pdf" target="_blank">available here </a></p>
    <CreateSession/>
  </Layout>
)

export default IndexPage
//<Link to="/page-2/">Go to page 2</Link>