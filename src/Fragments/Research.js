import React from 'react';
import Grid from '@material-ui/core/Grid';

const Research = props => {
  return (
    <>
        <title>
            <h2>Welcome to my page!  It is currently a work in progress.</h2>
        </title>
        <body>
            <h3 style={{alignItems: 'center'}}>
                Research
            </h3>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <h3 style={{alignItems: 'center'}}>
                        Other Stuff
                    </h3>
                        <p>
                            I'm not sure what to put here.
                        </p>
                    </Grid>
                </Grid>
        </body>
    

    </>
  )
}

export default Research;