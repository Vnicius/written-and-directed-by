import React from "react"

import domtoimage from "dom-to-image"

import "./styles.css"
import icon from "../../images/download-button.svg"

export default function DownloadButton({ nodeRef }) {
  const handleClick = () => {
    console.log({ nodeRef })
    domtoimage.toJpeg(nodeRef.current).then(function(dataUrl) {
      var link = document.createElement("a")
      link.download = "written-and-directed-by.jpeg"
      link.href = dataUrl
      link.click()
    })
  }

  return (
    <img
      src={icon}
      className={"ripple"}
      onClick={handleClick}
      alt={"download"}
    />
  )
}
