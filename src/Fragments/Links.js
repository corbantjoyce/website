import React, { Fragment } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        listStyleType: 'none',
    },
    listItem: {
        padding: '5%',
        hover: 'auto',
    }
  }));

const Links = props => {
    const classes = useStyles();

    return (
        <Fragment>
            <header>
                <h2>External Links</h2>
            </header>
            <body>
                <ul className={classes.list}>
                    <li className={classes.listItem}>
                        <a href="mailto:corbantjoyce@gmail.com">
                            <MailOutlineIcon />
                            Email
                        </a>
                    </li>
                    <li className={classes.listItem}>
                        <a href="https://www.linkedin.com/in/corban-joyce/">
                            <LinkedInIcon />
                            LinkedIn
                        </a>
                    </li>
                    <li className={classes.listItem}>
                        <a href="https://github.com/corbantjoyce">
                            <GitHubIcon />
                            Github
                        </a>
                        
                    </li>
                </ul>
            </body>
        

        </Fragment>
    )
}

export default Links;