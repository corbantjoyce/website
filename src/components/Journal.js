import React, { Fragment } from 'react';

const Journal = props => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      
    </Fragment>
  )
}

export default Journal;