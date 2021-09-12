import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontSize: '1.75rem',
    color: 'lightblue',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontWeight: 'bold',
    fontSize: '1rem',
    color: 'lightblue'
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:600px)');
  const { sections, title } = props;

  return (
    <Fragment>
      <Link
        color="inherit"
        align="center"
        component="h2"
        variant="h2"
        key={title}
        to="/"
        className={classes.toolbarTitle}
      >
        {title}
      </Link>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};