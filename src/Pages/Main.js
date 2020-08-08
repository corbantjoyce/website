import React from 'react';
import Header from '../Fragments/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Journal from '../Fragments/Journal';
import About from '../Fragments/About';
import Links from '../Fragments/Links';
import Home from '../Fragments/Home';
// import CenterColumn from '../Fragments/CenterColumn';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// import snow from '../images/snow.jpeg';
import lakelucerne from '../images/lakelucerne.jpeg';



const sections = [
    { title: 'Home', url: '/' },
    { title: 'About', url: 'about' },
    { title: 'Music', url: 'music' },
    { title: 'Videos', url: 'videos' },
    { title: 'Research', url: 'research' },
    // { title: 'Travel', url: 'travel' },
    // { title: 'Health', url: 'health' },
    // { title: 'Philanthropy', url: 'philanthropy' },
    // { title: 'Personal Projects', url: 'personal' },
    // { title: 'Business', url: 'business' },
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
    
    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xl={12}>
                        <img src={lakelucerne} alt="Field in Lake Lucerne" style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '4px'}}/>
                    </Grid>
                </Grid>
                <Router>
                    <Header title="CORBAN" sections={sections} />
                </Router>
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>
                            <Links />
                        </Paper>
                    </Grid>
                    <Grid item xs={10}>
                        <Paper className={classes.paper}>
                            <Route path='/:page' component={<page />}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Main;