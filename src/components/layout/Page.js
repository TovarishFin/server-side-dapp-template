import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const styles = {
  gradientBackground: {
    position: 'fixed',
    zIndex: -1,
    backgroundImage:
      'linear-gradient(to top, #e1f5fe 0%, rgba(255, 255, 255, 0) 59%, rgba(225, 245, 254, 0.9) 100%)',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  flexContainer: {
    padding: '5vh 2vw 5vh 2vw'
  },
  padded: {
    padding: '20px'
  }
}

const Page = ({ children, classes, paper, logoBackground }) => (
  <div className={classes.flexContainer}>
    <Grid container justify="center">
      <div className={classes.gradientBackground} />
      {paper ? (
        <Grid item lg={8} md={12} sm={12} xl={8} xs={12}>
          <Paper
            className={`${classes.padded} ${
              logoBackground ? classes.logoBackground : null
            }`}
          >
            {children}
          </Paper>
        </Grid>
      ) : (
        <Grid item lg={4} md={5} sm={6} xl={3} xs={12}>
          {children}
        </Grid>
      )}
    </Grid>
  </div>
)

export default withStyles(styles)(Page)
