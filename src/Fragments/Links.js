import React, { Fragment } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    list: {
        listStyleType: 'none',
    },
    listItem: {
        padding: '4%',
        hover: 'auto',
        fontSize: '1rem',
        justifyContent: 'left',
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
                <ul className={classes.list}>
                    <li className={classes.listItem}>
                        <a href="mailto:corbantjoyce@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MailOutlineIcon />
                            Email
                        </a>
                    </li>
                    <li className={classes.listItem}>
                        <a href="https://www.linkedin.com/in/corban-joyce/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                            LinkedIn
                        </a>
                    </li>
                    <li className={classes.listItem}>
                        <a href="https://github.com/corbantjoyce" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                            Github
                        </a>
                    </li>
                </ul>        
            </Container>
        </Fragment>
    )
}

export default Links;