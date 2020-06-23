import React from 'react';
import corbanpic from '../IMG_0049.jpg';
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
                    <Grid item xs={9}>
                        <p>
                            As of late June 2020, I am close to finishing the Capital One Developer Academy (CODA) program offered by Capital One.  As it is implied in the title of the program, it serves to train individuals to become full-stack developers.  This 6-month coding program transitions into Capital One's Technology Development Program (TDP) in its conclusion, and my personal experience with it can be learned about more on my <span><a href="https://www.linkedin.com/in/corban-joyce/">LinkedIn</a></span>.  Since this program trains me to be a full-stack web developer, this website serves the former purpose of providing me with practice in that field.  The latter purpose is to document information about myself, wherein others may derive various purposes, hopefully beneficial.
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={corbanpic} alt="Corban Joyce" style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '8px'}}/>
                    </Grid>
                </Grid>
        </body>
    

    </>
  )
}

export default About;