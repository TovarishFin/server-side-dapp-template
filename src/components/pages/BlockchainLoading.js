import React from 'react'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import { withStyles } from 'material-ui/styles'
import Page from '../layout/Page'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  spinner: {
    paddingTop: '30vh',
    textAlign: 'center',
    width: '100%',
    color: theme.palette.secondary.main
  }
})

const BlockchainLoading = ({ classes }) => (
  <Page>
    <Grid align="center" container justify="center">
      <Grid item md={6} xs={12}>
        <CircularProgress
          className={classes.spinner}
          size={200}
          thickness={10}
        />
        <Typography align="center" variant="title">
          {
            'Connecting to the blockchain... please install metamask if you have not already...'
          }
        </Typography>
      </Grid>
    </Grid>
  </Page>
)

export default withStyles(styles)(BlockchainLoading)
