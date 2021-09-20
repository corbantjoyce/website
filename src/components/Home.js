import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Links from '../components/Links';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '2%'
    }
}));

const Home = props => {
    const classes = useStyles();

    return (
        <>
            <Grid item style={{background: 'white'}}>
                <Links />
            </Grid>
            <h2 style={{alignItems: 'center', paddingTop: '2%'}}>
                Welcome!
            </h2>
            <Grid container className={classes.container}>
                <Grid item>
                    <p>
                        I built this website using React.js and Material UI, with a pipeline configured in AWS, triggered by a Github webhook.
                    </p>
                    <p>
                        Cycle through images at the top by clicking or tapping the current photo.  All photos were taken on my iPhone.
                    </p>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;