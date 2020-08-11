import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import thesis from '../images/thesis.jpeg';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
    }
}));

const Research = props => {
    const classes = useStyles();

  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h3 style={{alignItems: 'center'}}>
                    Current Research
                </h3>
                <p className={classes.p}>
                    I am not currently involved in any research.
                </p>
            </Grid>
            <Grid item xs={12}>
                <h3 style={{alignItems: 'center'}}>
                    Past Research
                </h3>
                <p className={classes.p}>
                    During my undergrad, I did research in the Micro/Nano Multi-Physical Dynamics Lab (MNMDL) at the Ohio State University.
                </p>
                <Grid container direction="row" justify="center">
                    <Grid item>
                        <img src={thesis} alt="First page of thesis"  
                            style={{maxWidth: '25%', maxHeight: '25%', borderRadius: '2px'}}/>
                    </Grid>
                    <Grid item>
                        <p className={classes.p}>
                            I successfully defended my thesis titled <a href='https://kb.osu.edu/handle/1811/88692' target="_blank" rel="noopener noreferrer">Investigation of Metal Corrosion by In-Situ Electrochemical Force Microscopy</a> in December 2019.  Additional information can be found on my <a href='https://linkedin.com/in/corban-joyce' target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default Research;