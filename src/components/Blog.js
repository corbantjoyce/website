import React from 'react';
// import corbanpic from '../images/IMG_0049.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Links from '../components/Links';
import Paper from '@material-ui/core/Paper';
import { text } from '../database/blog_posts/goldenvoting/03042020_GoldenVoting.js';

const useStyles = makeStyles((theme) => ({
    p: {
        fontSize: '1rem',
    },
    image: {
        height: '100%',
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
            <Grid item xs={12}>
                <Paper style={{padding: '0.5%', borderRadius: '0px', backgroundColor: 'darkgray', color: 'white',}} elevation={0}>
                    <Links />
                </Paper>
            </Grid>
            <div style={{margin: '1%'}}>
                <h2 style={{alignItems: 'center'}}>
                    My Blog
                </h2>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        {/* <img src={corbanpic} alt="Corban Joyce" className={classes.p} style={{justifyContent: 'center', maxWidth: '100%', maxHeight: '100%', borderRadius: '8px'}}/> */}
                    </Grid>
                    <Grid item>
                        <div className={classes.p}>
                            {textParser(text)}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Blog;