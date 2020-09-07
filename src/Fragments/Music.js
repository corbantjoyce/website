import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import geniusprofile from '../images/unannotatedunmastered.jpeg';

const useStyles = makeStyles((theme) => ({
    p: {
        marginTop: '1%',
        fontSize: '1rem',
        justifyContent: 'center'
    },
    songTitle: {
        fontSize: '2rem',
    },
    post: {
        margin: '2%',
    }
}));

const Music = props => {
    const classes = useStyles();
    const songs = [
        {
            title: "Deep Dive Five by Thomas",
            songTitle: "DEEP DIVE FIVE",
            src: "https://open.spotify.com/embed/track/4CpZYOv2VBdjla4iF1aCyh"
        }
    ]

    return (
        <>
            <div style={{margin: '1%'}}>
                <h2 style={{alignItems: 'center'}}>
                    Music
                </h2>
                <Grid container spacing={2}>
                    <Grid container spacing={2} className={classes.post}>
                        <Grid item xs={6}>
                            <img src={geniusprofile} alt='UnannotatedUnmastered profile' style={{maxWidth: '100%', maxHeight: '100%'}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <p className={classes.p}>
                                I have always loved music, as many people do.  My passion has driven me to analyze the meaning of music, and I became an editor for <a href="https://www.genius.com/" target="_blank" rel="noopener noreferrer">Genius.com</a> in the spring of 2016.  <a href="https://www.genius.com/unannotatedunmastered" target="_blank" rel="noopener noreferrer">My profile</a> contains the majority of my work for the site.  While I used to be extremely active making annotations and participating in forums, I have not been nearly as active in recent years.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.post}>
                        <Grid item xs={6} className={classes.titleBlock}>
                            <br>
                            </br>
                            <br>
                            </br>
                            <p className={classes.songTitle}>
                                "{songs[0].songTitle}"
                            </p>
                        </Grid>
                        <Grid item xs={6}>
                            <iframe title={songs[0].title} width="300" height="380" src={songs[0].src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen allowtransparency="true" style={{maxWidth: '100%', maxHeight: '100%'}}></iframe>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Music;