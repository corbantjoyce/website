import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import sunsetpaviliongif from '../images/sunsetpavilion/timelapse-long.gif';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem',
        padding: '3%'
    },
    locationAndDate: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const Projects = props => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={4} className={classes.locationAndDate}>
                        <p className={classes.p}>
                            Cleveland, OH
                        </p>
                    </Grid>
                    <Grid item xs={4}>
                        <h3>
                            Sunset Pavilion
                        </h3>
                    </Grid>
                    <Grid item xs={4} className={classes.locationAndDate}>
                        <p className={classes.p}>
                            February 2020 - June 2020
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.p}>
                            <img src={sunsetpaviliongif} alt="Sunset Pavilion Gif" style={{maxWidth: '95%', maxHeight: '95%', borderRadius: '4px'}}/>
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Projects;