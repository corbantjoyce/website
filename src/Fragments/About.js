import React from 'react';
import corbanpic from '../images/IMG_0049.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
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
                            In August 2020, I graduate from the Capital One Developer Academy (CODA) program offered by Capital One.  Since this program teaches me to be a full-stack web developer, this website serves the purpose of providing me with practice in that field.  The other purpose of this site is to document information about myself, wherein others may derive various uses, hopefully beneficial.
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