import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Links from '../components/Links';

const useStyles = makeStyles((theme) => ({
    p: {
        // fontSize: RFPercentage(5),
        justifyContent: 'center',
    }
}));

const Home = props => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <p className={classes.p}>
                        Welcome to my page!  I built it using React.js.
                    </p>
                    <p className={classes.p}>
                        Cycle the image at the top by clicking or tapping it.  All photos were taken on my iPhone.
                    </p>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: 'lightblue', padding: '1%'}}>
                <Links />
            </Grid>
        </>
    )
}

export default Home;