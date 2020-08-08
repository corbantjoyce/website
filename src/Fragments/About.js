import React from 'react';
import corbanpic from '../images/IMG_0049.jpg';
import Grid from '@material-ui/core/Grid';

const About = props => {
  return (
    <>
        <title>
            <h2>Welcome to my page!  It is currently a work in progress.</h2>
        </title>
        <body>
            <h3 style={{alignItems: 'center'}}>
                About Me
            </h3>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img src={corbanpic} alt="Corban Joyce" style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '8px'}}/>
                </Grid>
                <Grid item xs={9}>
                    <p>
                        In August 2020, I graduate from the Capital One Developer Academy (CODA) program offered by Capital One.  Since this program teaches me to be a full-stack web developer, this website serves the purpose of providing me with practice in that field.  The other purpose of this site is to document information about myself, wherein others may derive various uses, hopefully beneficial.
                    </p>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </body>
    </>
  )
}

export default About;