import React from 'react';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
    }
}));

const Home = props => {
    const classes = useStyles();

    return (
        <>
            <h2 style={{alignItems: 'center'}}>
                Home
            </h2>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <p>
                        Welcome to my page!  It is currently a work in progress.
                        Navigate to other parts of the site by clicking on one of the tabs above. 
                    </p>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;