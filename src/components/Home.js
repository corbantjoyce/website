import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
            <Grid item>
                <Paper elevation={0}>
                    <Links />
                </Paper>
            </Grid>
            <h2 style={{alignItems: 'center', paddingTop: '2%'}}>
                Welcome
            </h2>
            <Grid container className={classes.container}>
                <Grid item>
                    <p>
                        I built it using React.js and Material UI.
                    </p>
                    <p>
                        Cycle the image at the top by clicking or tapping it.  All photos were taken on my iPhone.
                    </p>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;