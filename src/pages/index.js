import React, { useRef } from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import Title from "../components/Title"
import TextInput from "../components/TextInput"

import "../styles/global.css"
import DownloadButton from "../components/DownloadButton"

function IndexPage() {
  const containerRef = useRef()

  return (
    <Layout>
      <SEO title="Written and directed by... Generator" />
      <div className={"container"} ref={containerRef}>
        <Title>WRITTEN AND DIRECTED</Title>
        <Title>BY</Title>
        <TextInput />
      </div>
      <DownloadButton nodeRef={containerRef} />
      <a className="repo-link" href="">
        The Code
      </a>
    </Layout>
  )
}

export default IndexPage
