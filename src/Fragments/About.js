import React from 'react';
// import corbanpic from '../images/IMG_0049.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Links from '../Fragments/Links';
import Paper from '@material-ui/core/Paper';
// import { RFPercentage } from 'react-native-responsive-fontsize';

const useStyles = makeStyles((theme) => ({
    p: {
        // fontSize: RFPercentage(5),
    },
    image: {
        height: '100%',
    }
}));

const About = props => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <Paper style={{padding: '0.5%', borderRadius: '0px', backgroundColor: 'darkgray', color: 'white',}} elevation={0}>
                    <Links />
                </Paper>
            </Grid>
            <div style={{margin: '1%'}}>
                <h2 style={{alignItems: 'center'}}>
                    About Me
                </h2>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        {/* <img src={corbanpic} alt="Corban Joyce" className={classes.p} style={{justifyContent: 'center', maxWidth: '100%', maxHeight: '100%', borderRadius: '8px'}}/> */}
                    </Grid>
                    <Grid item >
                        <p className={classes.p}>
                            I graduated from the Ohio State University with a bachelor's degree in Mechanical Engineering in December 2019.  While I love Mechanical Engineering, I realized that I am just as interested in engineering as a whole as I am any particular facet of engineering. My focus and passion is centered more on innovation in general and finding ways to make the world better.  When I got the opportunity to learn more about software engineering, I took it.
                        </p>
                        <p className={classes.p}>
                            In August 2020, I graduated from the Capital One Developer Academy (CODA) program.  The program gave me skills to become full-stack software engineer, and this website serves the purpose of practice. I use it to experiment with various technologies and share aspects of my life.  I hope that others may find it entertaining and/or useful.
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