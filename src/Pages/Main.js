import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import Header from '../Fragments/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from '../Fragments/About';
import Home from '../Fragments/Home';
import Research from '../Fragments/Research';
import Projects from '../Fragments/Projects';
import Videos from '../Fragments/Videos';
import Music from '../Fragments/Music';

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
import shenandoah from '../images/backgrounds/shenandoah.jpeg';
import ludington from '../images/backgrounds/ludington.jpeg';

// let MediaQuery = require('react-responsive');

const sections = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Music', url: '/music' },
    { title: 'Videos', url: '/videos' },
    { title: 'Research', url: '/research' },
    // { title: 'Travel', url: 'travel' },
    // { title: 'Health', url: 'health' },
    // { title: 'Philanthropy', url: 'philanthropy' },
    { title: 'Projects', url: 'projects' },
];

class Main extends Component {    
    constructor() {
        super();
        this.state = {
            backgrounds: [
                {
                    src: lakelucerne,
                    alt: `lake lucerne, ohio`
                },
                {
                    src: jacksonhole,
                    alt: `jackson hole ski resort, wyoming`
                },
                {
                    src: blackhills,
                    alt: `black hills national park, south dakota`
                },
                {
                    src: london,
                    alt: `london, united kingdom`
                },
                {
                    src: maine,
                    alt: `acadia national park, maine`
                },
                {
                    src: milan,
                    alt: `milan, italy`
                },
                {
                    src: minneapolis,
                    alt: `minneapolis, minnesota`
                },
                {
                    src: newmexicotexas,
                    alt: `el paso, texas`
                },
                {
                    src: shenandoah,
                    alt: `shenandoah national park, virginia`
                },
                {
                    src: ludington,
                    alt: `ludington state park, michigan`
                },
            ],
            currentBackground: 0,
        };
        this.uri = 'https://www.corbanjoyce.com';
        this.classes = {
            root: {
                flexGrow: 1,
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
                <Router>
                <Container maxWidth="xl">
                    <Header title="CORBAN JOYCE" sections={sections} />
                </Container>
                <MDBBtn onClick={() => this.changeBackground()} style={{width: '100%'}}>
                    <img src={this.state.backgrounds[this.state.currentBackground].src} alt={this.state.backgrounds[this.state.currentBackground].alt.toLocaleUpperCase()}  
                    style={{maxWidth: '100%', maxHeight: '100%'}}/>
                </MDBBtn>
                <Container maxWidth="xl" style={{paddingBottom: '8px', marginTop: '1%'}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper elevation={3} style={{padding: '0.5%', borderRadius: '0px', backgroundColor: 'darkgray', color: 'white',}}>
                                <Switch>
                                    <Route exact path='/' component={Home} cb={this.state.backgrounds[this.state.currentBackground].src}/>
                                    <Route path='/about' component={About} cb={this.state.backgrounds[this.state.currentBackground].src}/>
                                    <Route path='/research' component={Research} cb={this.state.backgrounds[this.state.currentBackground].src}/>
                                    <Route path='/projects' component={Projects} cb={this.state.backgrounds[this.state.currentBackground].src}/>
                                    <Route path='/videos' component={Videos} cb={this.state.backgrounds[this.state.currentBackground].src}/>
                                    <Route path='/music' component={Music} cb={this.state.backgrounds[this.state.currentBackground].src}/>
                                </Switch>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                </Router>
            </>
        )
    }
}

export default Main;