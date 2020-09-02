import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1.5rem',
        justifyContent: 'center',
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
                    <p className={classes.p}>
                        Welcome to my page!  It is currently a work in progress.  The tech stack used for this site is React and node.js, and if I implement a backend, I will either use MongoDB or DynamoDB.
                    </p>
                    <p className={classes.p}>
                        If you are a US citizen, make sure you are registered to vote:
                        <a href="https://www.vote.gov" target="_blank" rel="noopener noreferrer"> vote.gov</a>.  It takes like 5 minutes.
                    </p>
                    <p className={classes.p}>
                        Change the background image at the top by clicking or tapping it.  All photos were taken on my iPhone.
                    </p>
                    <p className={classes.p}>
                        Navigate to other sections of the site by selecting one of the tabs above. 
                    </p>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;