import React, { useState } from "react"

import "./styles.css"

function TextInput() {
  const [text, setText] = useState("Quentin\nTarantino")

  return (
    <textarea
      type="text"
      value={text}
      onChange={e => setText(e.target.value)}
      rows={2}
      autoFocus={true}
    />
  )
}

export default TextInput
