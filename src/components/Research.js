import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import thesis from '../images/thesis.jpeg';
import svcc from '../images/conference.jpeg';


const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
        maxWidth: '100%'
    },
    container: {
        padding: '3%'
    },
    img: {
        padding: '2%',
        maxWidth: '80%',
        borderRadius: '2px'
    }
}));

const Research = props => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item>
                    <p className={classes.p}>
                        During my undergrad, I did research in the <a href="https://mnmdl.osu.edu/" target="_blank" rel="noopener noreferrer">Micro/Nano Multi-Physical Dynamics Lab (MNMDL)</a> at the Ohio State University.
                    </p>
                </Grid>
                <Grid item>
                    <a href='https://kb.osu.edu/handle/1811/88692' target="_blank" rel="noopener noreferrer">
                        <img src={thesis} alt="First page of thesis" className={classes.img}/>
                    </a>
                </Grid>
                <Grid item>
                    <p className={classes.p}>
                        I successfully defended my thesis titled <a href='https://kb.osu.edu/handle/1811/88692' target="_blank" rel="noopener noreferrer">Investigation of Metal Corrosion by In-Situ Electrochemical Force Microscopy</a> in December 2019.  Additional information, including a summary of my work, can be found on my <a href='https://linkedin.com/in/corban-joyce' target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                    </p>
                    <img src={svcc} alt="Presentation at Smart Vehicles Concepts Conference" className={classes.img}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Research;