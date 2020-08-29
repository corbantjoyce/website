import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1.5rem',
        alignItems: 'center'
    },
    titleBlock: {
        alignItems: 'center',
        alignContent: 'center'
    }
}));

const Videos = props => {
    const classes = useStyles();
    const videos = [
        {
            title: "Juggling: Deep Dive Five by Thomas",
            songTitle: "DEEP DIVE FIVE",
            src: "https://www.youtube.com/embed/PrcoUUKzbIk"
        }
    ]

    for (const [index, value] of videos.entries()) {
        //
    }


    return (
        <>
            <div style={{margin: '1%'}}>
                <h2 style={{alignItems: 'center'}}>
                    Videos
                </h2>
                <Grid container spacing={2}>
                    
                    <Grid container spacing={1}>
                        <Grid item xs={6} className={classes.titleBlock}>
                            <br>
                            </br>
                            <br>
                            </br>
                            <p className={classes.p}>
                                "{videos[0].songTitle}"
                            </p>
                        </Grid>
                        <Grid item xs={6}>
                            <iframe title={videos[0].title} width="560" height="315" src={videos[0].src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{maxWidth: '100%', maxHeight: '100%'}}></iframe>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}

export default Videos;