import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    p: {
        marginTop: '1%',
        fontSize: '1.5rem',
    }
}));

const Music = props => {
    const classes = useStyles();

    return (
        <>
            <div style={{margin: '1%'}}>
                <h2 style={{alignItems: 'center'}}>
                    Music
                </h2>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className={classes.p}>
                            This page is currently under construction.
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Music;