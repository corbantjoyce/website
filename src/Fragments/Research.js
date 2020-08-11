import React from 'react';
import Grid from '@material-ui/core/Grid';

const Research = props => {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h3 style={{alignItems: 'center'}}>
                    Current Research
                </h3>
                <p>
                    I am not currently involved in any research.
                </p>
            </Grid>
            <Grid item xs={12}>
                <h3 style={{alignItems: 'center'}}>
                    Past Research
                </h3>
                <p>
                    During my undergrad, I did research in the Micro/Nano Multi-Physical Dynamics Lab (MNMDL) at the Ohio State University.
                </p>
            </Grid>
        </Grid>
    </>
  )
}

export default Research;