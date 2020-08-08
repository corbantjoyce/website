import React from 'react';
import Grid from '@material-ui/core/Grid';

const Home = props => {
  return (
    <>
        <body>
            <h3 style={{alignItems: 'center'}}>
                Home
            </h3>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <p>
                        Welcome to my page!  It is currently a work in progress.
                        Navigate to other parts of the site by clicking on one of the tabs above. 
                    </p>
                </Grid>
            </Grid>
        </body>
    

    </>
  )
}

export default Home;