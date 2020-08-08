import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { MDBFormInline } from 'mdbreact';

const Philanthropy = props => {
  return (
    <>
        <title>
            <h2>Philanthropy</h2>
        </title>
        <body>
            <h3 style={{alignItems: 'center'}}>
                What is a charity that helps make the world a better place?
            </h3>
            <form>
                <label>
                    Charity Name:
                    <input type="text" name="charity"/>
                </label>
                <label>
                    Your Name (optional):
                    <input type="text" name="charity" placeholder="Anonymous"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h3 style={{alignItems: 'center'}}>
                I have the privilege to have excess monies in my life, so I have vowed that I will give a X% of my income away to others, indefinitely.  It is not always easy to know what or who to give it to, however.  I do know one thing though, and I would like to give my money toward causes that make the human condition better.  So, I encourage visitors of this site to give recommendations for charities that they think will help those who need the most.
            </h3>
            <h3 style={{alignItems: 'center'}}>
                This is a list of charities or other organizations, in which any one may apply to one of the following:
            </h3>
            <ol>
                <li>I have already donated to it.</li>
                <li>I wish to donate to it in the future. Reasons why I may wish to donate to it in the future include:</li>
                    <ul>
                        <li>It has helped me and I wish to give back to it, so that it may help others in a similar way.</li>
                        <li>I think it will help people that are in need of help.</li>
                    </ul>
            </ol>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <h3 style={{alignItems: 'center'}}>
                        The List
                    </h3>
                    <ol>
                        <li>Wikipedia</li>
                        <li>Know Your Rights Camp</li>
                        <li>Know Your Rights Camp COVID-19 Relief Fund</li>
                        <li>Wounded Warrior Project</li>
                        <li>Minnesota Freedom Fund</li>
                        <li>USA for UNHCR</li>
                        <li>Sweet Relief Musicians Fund</li>
                    </ol>
                    </Grid>
                </Grid>
        </body>
    

    </>
  )
}

export default Philanthropy;