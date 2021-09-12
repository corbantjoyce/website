import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import thesis from '../images/thesis.jpeg';
import svcc from '../images/conference.jpeg';


const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
    },
    container: {
        padding: '2%'
    }
}));

const Research = props => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <p className={classes.p}>
                        During my undergrad, I did research in the <a href="https://mnmdl.osu.edu/" target="_blank" rel="noopener noreferrer">Micro/Nano Multi-Physical Dynamics Lab (MNMDL)</a> at the Ohio State University.
                    </p>
                </Grid>
                <Grid container>
                    <Grid item>
                        <a href='https://kb.osu.edu/handle/1811/88692' target="_blank" rel="noopener noreferrer">
                            <img src={thesis} alt="First page of thesis"  
                                style={{maxWidth: '80%', borderRadius: '2px'}}
                            />
                        </a>
                    </Grid>
                    <Grid item>
                        <p className={classes.p}>
                            I successfully defended my thesis titled <a href='https://kb.osu.edu/handle/1811/88692' target="_blank" rel="noopener noreferrer">Investigation of Metal Corrosion by In-Situ Electrochemical Force Microscopy</a> in December 2019.  Additional information, including a summary of my work, can be found on my <a href='https://linkedin.com/in/corban-joyce' target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        </p>
                        <img src={svcc} alt="Presentation at Smart Vehicles Concepts Conference"  
                            style={{maxWidth: '75%', maxHeight: '75%', borderRadius: '2px', padding: '2%'}}
                        />
                        {/* <p className={classes.p}>
                            While I learned a lot of technical information during my research experience, the most notable thing that I learned was how hard-working my peers were.  To recognize or appreciate my thesis, one must first recognize and appreciate all the people who helped me complete it.  I would like thank my advisor and professor, Dr. Hanna Cho, PhD.; my labmate, Jun Wei Yap; and my mentor, Dr. Sajith Dharmasena, PhD.  Without their help and guidance, I would not have been able to complete my work.
                        </p> */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Research;