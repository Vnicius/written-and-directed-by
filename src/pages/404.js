import React from "react"

import SEO from "../components/seo"

import "../styles/global.css"
import Layout from "../components/Layout"
import Title from "../components/Title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>NOT FOUND</Title>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
