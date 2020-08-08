import React from 'react';
// import { Redirect } from 'react-router-dom';
import Header from '../Fragments/Header'
import Journal from '../Fragments/Journal';
import About from '../Fragments/About';
import Links from '../Fragments/Links';
import Home from '../Fragments/Home';
// import CenterColumn from '../Fragments/CenterColumn';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const sections = [
    { title: 'Home', url: '' },
    // { title: 'Travel', url: 'travel' },
    // { title: 'Health', url: 'health' },
    { title: 'Music', url: 'music' },
    { title: 'Videos', url: 'videos' },
    // { title: 'Philanthropy', url: 'philanthropy' },
    // { title: 'Personal Projects', url: 'personal' },
    // { title: 'Business', url: 'business' },
    { title: 'Research', url: 'research' },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Main() {    
    const classes = useStyles();

    // function CenterColumn(props) {
    //     switch props:
    //     return <About />;
    // }

    
    return (
        <>
            <Container maxWidth="xl">
                <Header title="Corban" sections={sections} />
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Links />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            {/* <CenterColumn /> */}
                            <Home />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>

                        </Paper>
                    </Grid>
                </Grid>
                <Journal />
            </Container>
        </>
    )
    
}

export default Main;