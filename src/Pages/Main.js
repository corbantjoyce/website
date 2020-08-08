import React from 'react';
import Header from '../Fragments/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Journal from '../Fragments/Journal';
import About from '../Fragments/About';
import Links from '../Fragments/Links';
import Home from '../Fragments/Home';
import Research from '../Fragments/Research';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// import snow from '../images/snow.jpeg';
import lakelucerne from '../images/lakelucerne.jpeg';

const sections = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Music', url: '/music' },
    { title: 'Videos', url: '/videos' },
    { title: 'Research', url: '/research' },
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
        marginBottom: '1%'
    },
    image: {
        marginTop: '1%',
    }
}));

function Main() {    
    const classes = useStyles();
    
    return (
        <>
            <Container maxWidth="xl">
                <img src={lakelucerne} alt="Field in Lake Lucerne" className={classes.image} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '4px'}}/>
                <Router>
                    <Header title="CORBAN" sections={sections} />
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>
                            <Links />
                        </Paper>
                    </Grid>
                    <Grid item xs={10} >
                        <Paper className={classes.paper}>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/about' component={About}/>
                                <Route path='/research' component={Research}/>
                            </Switch>
                        </Paper>
                    </Grid>
                </Grid>
                </Router>
            </Container>
        </>
    )
}

export default Main;