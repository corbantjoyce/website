import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import Header from '../Fragments/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Journal from '../Fragments/Journal';
import About from '../Fragments/About';
import Links from '../Fragments/Links';
import Home from '../Fragments/Home';
import Research from '../Fragments/Research';
import Projects from '../Fragments/Projects';

import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//backgrounds
import lakelucerne from '../images/backgrounds/lakelucerne.jpeg';
import blackhills from '../images/backgrounds/blackhills.jpeg';
import jacksonhole from '../images/backgrounds/jacksonhole.jpeg';
import london from '../images/backgrounds/london.jpeg';
import maine from '../images/backgrounds/maine.jpeg';
import milan from '../images/backgrounds/milan.jpeg';
import minneapolis from '../images/backgrounds/minneapolis.jpeg';
import newmexicotexas from '../images/backgrounds/newmexicotexas.jpeg';
import southdakota from '../images/backgrounds/southdakota.jpeg';

const sections = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    // { title: 'Music', url: '/music' },
    // { title: 'Videos', url: '/videos' },
    { title: 'Research', url: '/research' },
    // { title: 'Travel', url: 'travel' },
    // { title: 'Health', url: 'health' },
    // { title: 'Philanthropy', url: 'philanthropy' },
    { title: 'Projects', url: 'projects' },
    // { title: 'Business', url: 'business' },
];

class Main extends Component {    

    constructor() {
        super();
        this.state = {
            backgrounds: [
                {
                    src: lakelucerne,
                    alt: `${lakelucerne}`
                },
                {
                    src: jacksonhole,
                    alt: `${jacksonhole}`
                },
                {
                    src: blackhills,
                    alt: `${blackhills}`
                },
                {
                    src: london,
                    alt: `${london}`
                },
                {
                    src: maine,
                    alt: `${milan}`
                },
                {
                    src: minneapolis,
                    alt: `${minneapolis}`
                },
                {
                    src: newmexicotexas,
                    alt: `${newmexicotexas}`
                },
                {
                    src: southdakota,
                    alt: `${southdakota}`
                },
            ],
            currentBackground: 0,
        };
        this.uri = 'https://corbanjoyce.com';
        this.classes = {
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: '1%',
                textAlign: 'center',
                color: 'white',
                marginBottom: '1%'
            },
            image: {
                marginTop: '1%',
            }
        };
    }

    changeBackground = () => {
        if (this.state.currentBackground < this.state.backgrounds.length - 1) {
            this.setState({
                currentBackground: this.state.currentBackground + 1
            })
        } else {
            this.setState({
                currentBackground: 0
            })
        }
    }
    
    render() {
        return (
            <>
                <Container maxWidth="xl">
                    <Router>
                    <Header title="CORBAN JOYCE" sections={sections} />
                    <MDBBtn onClick={() => this.changeBackground()}>
                        <img src={this.state.backgrounds[this.state.currentBackground].src} alt="Field in Lake Lucerne"  
                        style={{marginTop: '2%', maxWidth: '100%', maxHeight: '100%', borderRadius: '4px'}}/>
                    </MDBBtn>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper style={{padding: '1%'}} elevation={3}>
                                <Links />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} >
                            <Paper style={{padding: '2%'}} elevation={3}>
                                <Switch>
                                    <Route exact path='/' component={Home}/>
                                    <Route path='/about' component={About}/>
                                    <Route path='/research' component={Research}/>
                                    <Route path='/projects' component={Projects}/>
                                </Switch>
                            </Paper>
                        </Grid>
                    </Grid>
                    </Router>
                </Container>
            </>
        )
    }
}

export default Main;