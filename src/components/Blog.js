import React from 'react';
// import corbanpic from '../images/IMG_0049.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { text } from '../database/blog_posts/goldenvoting/03042020_GoldenVoting.js';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
    },
    image: {
        height: '100%',
    },
    title: {
        margin: '2%'
    },
    container: {
        padding: '2%'
    }
}));

function textParser(text) {
    let blog = [];
    text.forEach((paragraph) => {
        paragraph = linkParser(paragraph);
        blog.push(<p>{paragraph}</p>);
    })
    return blog;
}

function linkParser(paragraph) {
    if (paragraph.includes('>>')) {
        paragraph.split('>>');
        console.log(paragraph);
    }
    return paragraph;
}

const Blog = props => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.container}>
                <Grid item>
                    <h3 className={classes.title}>
                        Golden Voting
                    </h3>
                    <div className={classes.p}>
                        {textParser(text)}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Blog;