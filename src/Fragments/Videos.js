import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1.5rem',
    }
}));

const Videos = props => {
    const classes = useStyles();

    return (
        <>
            <div style={{margin: '1%'}}>
                <h2 style={{alignItems: 'center'}}>
                    Videos
                </h2>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className={classes.p}>
                            "DEEP DIVE FIVE"
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <iframe title="Juggling: Deep Dive Five by Thomas" width="560" height="315" src="https://www.youtube.com/embed/PrcoUUKzbIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{maxWidth: '100%', maxHeight: '100%'}}></iframe>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Videos;