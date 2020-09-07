import React, { Fragment } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    list: {
        listStyleType: 'none',
    },
    listItem: {
        padding: '1%',
        hover: 'auto',
        fontSize: '1rem',
        justifyContent: 'center',
    },
    paper: {
        background: 'dark',
        color: 'dark',
        margin: '1%'
    }
  }));

const Links = props => {
    const classes = useStyles();

    return (
        <Fragment>
            <header>
                <h2>External Links</h2>
            </header>
            <Container maxWidth="xl">
                <Grid container alignItems="center">
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <a href="mailto:corbantjoyce@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MailOutlineIcon />
                                Email
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <a href="https://www.linkedin.com/in/corban-joyce/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                                LinkedIn
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <a href="https://github.com/corbantjoyce" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                                Github
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Links;