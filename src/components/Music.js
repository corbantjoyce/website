import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import geniusprofile from '../images/unannotatedunmastered.jpeg';

const useStyles = makeStyles((theme) => ({
    p: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1%',
        fontSize: '1rem'
    },
    container: {
        padding: '2%'
    },
    songTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: '2rem',
    },
    postLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '2%',
    },
    postRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '2%',
    },
    postCenter: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2%',
    }
}));

const Music = props => {
    const classes = useStyles();
    const songs = [
        {
            title: "DEEP DIVE FIVE",
            artist: "THOMÄS",
            src: "https://open.spotify.com/embed/track/4CpZYOv2VBdjla4iF1aCyh"
        },
        {
            title: "MOONLIT (INTERLUDE)",
            artist: "THOMÄS",
            src: "https://open.spotify.com/embed/track/0bb5pmpaDgiNua1vijKAYB"
        }
    ]

    return (
        <>
            <Grid container className={classes.container}>
                <Grid container className={classes.postLeft}>
                    <Grid item className={classes.titleBlock}>
                        <p className={classes.songTitle}>
                            "{songs[1].title}"
                        </p>
                        <iframe title={songs[1].title} width="300" height="380" src={songs[1].src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{maxWidth: '100%', maxHeight: '100%'}}></iframe>
                    </Grid>
                </Grid>
                <Grid container className={classes.postRight}>
                    <Grid item className={classes.titleBlock}>
                        <p className={classes.songTitle}>
                            "{songs[0].title}"
                        </p>
                        <iframe title={songs[0].title} width="300" height="380" src={songs[0].src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{maxWidth: '100%', maxHeight: '100%'}}></iframe>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.postCenter}>
                    <Grid item>
                        <a href="https://www.genius.com/unannotatedunmastered" target="_blank" rel="noopener noreferrer"><img src={geniusprofile} alt='UnannotatedUnmastered profile' style={{maxWidth: '100%', maxHeight: '100%'}}/></a>
                        <p className={classes.p}>
                            I have always loved music.  I became an editor for Genius in the spring of 2016.
                        </p>
                        <p className={classes.p}>
                            My profile contains the majority of my work for the site.  I used to be addicted to this site, but I haven't been as active in recent years.
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Music;