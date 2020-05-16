import React, { Fragment } from "react"

const Headings = props => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </Fragment>
  )
}

export default Headings;