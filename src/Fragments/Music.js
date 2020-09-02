import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import geniusprofile from '../images/unannotatedunmastered.jpeg';

const useStyles = makeStyles((theme) => ({
    p: {
        marginTop: '1%',
        fontSize: '1.5rem',
        justifyContent: 'center'
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
                            This page is currently under construction.  More music to come ;)
                        </p>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img src={geniusprofile} style={{maxWidth: '100%', maxHeight: '100%'}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <p className={classes.p}>
                                I have always loved music, as many people do.  My passion has driven me to analyze the meaning of music, and I became an editor for <a href="https://www.genius.com/unannotatedunmastered" target="_blank" rel="noopener noreferrer">Genius.com</a> in the spring of 2016.  My <a href="https://www.genius.com/unannotatedunmastered" target="_blank" rel="noopener noreferrer">profile</a> contains the majority of my work for the site.  While I used to be extremely active, making annotations and participating in forums, I have not been active in recent years.
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Music;