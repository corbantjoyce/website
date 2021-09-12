import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Links from '../components/Links';

const useStyles = makeStyles((theme) => ({
    p: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        padding: '2%'
    }
}));

const Home = props => {
    const classes = useStyles();

    return (
        <>
            <Grid item>
                <Links />
            </Grid>
            <Grid container className={classes.container}>
                <Grid item>
                    <p className={classes.p}>
                        Welcome to my page!  I built it using React.js and Material UI.
                    </p>
                    <p className={classes.p}>
                        Cycle the image at the top by clicking or tapping it.  All photos were taken on my iPhone.
                    </p>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;