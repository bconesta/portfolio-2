import React from 'react'

export default function Navbar(props) {
  return (
    <div className={props.className}>
      <a href="../files/resume.pdf" download="resume.pdf">Download</a>
    </div>
  )
}
