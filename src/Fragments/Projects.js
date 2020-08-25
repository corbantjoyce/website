import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import sunsetpaviliongif from '../images/sunsetpavilion/timelapse-long.gif';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
    }
}));

const Projects = props => {
    const classes = useStyles();

    return (
        <>
            <h2 style={{alignItems: 'center'}}>
                Projects
            </h2>
            <Grid container spacing={1}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <h3 className={classes.p}>
                            Cleveland, OH
                        </h3>
                    </Grid>
                    <Grid item xs={4}>
                        <p className={classes.p}>
                            Sunset Pavilion
                        </p>
                    </Grid>
                    <Grid item xs={4}>
                        <p className={classes.p}>
                            Februrary 2020 - June 2020
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.p}>
                            <img src={sunsetpaviliongif} alt="Sunset Pavilion Gif" style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '8px'}}/>
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Projects;