import React from 'react';
import corbanpic from '../images/IMG_0049.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '2rem',
    }
}));

const About = props => {
    const classes = useStyles();

    return (
        <>
            <div style={{margin: '1%'}}>
                <h2 style={{alignItems: 'center'}}>
                    About Me
                </h2>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <img src={corbanpic} alt="Corban Joyce" style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '8px'}}/>
                    </Grid>
                    <Grid item xs={9}>
                        <p className={classes.p}>
                            I graduated from the Ohio State University with a bachelor's degree in Mechanical Engineering in December 2019.  While I love Mechanical Engineering, I realized that I just as interested in engineering as a whole as I am in the specific field. My focus and passion is centered more on innovation in general.  When I got the opportunity to learn more about software engineering, I took it.
                        </p>
                        <p className={classes.p}>
                            In August 2020, I graduated from the Capital One Developer Academy (CODA) program offered by Capital One.  The program teaches a select few to be a full-stack software developers, so this website serves the purpose of providing a bit of practice. I use it to experiment with various technologies and share aspects of my life.  I hope that others may find it entertaining and/or useful.
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default About;