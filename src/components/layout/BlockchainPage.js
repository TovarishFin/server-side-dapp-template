import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import { drizzleConnect } from 'drizzle-react'
import BlockchainLoading from '../pages/BlockchainLoading'

const styles = {
  flexContainer: {
    padding: '5vh 2vw 5vh 2vw'
  },
  padded: {
    padding: '20px'
  }
}

const BlockchainPage = ({
  children,
  classes,
  paper,
  drizzleInitialized,
  accounts,
  accountRequired
}) => {
  if (drizzleInitialized) {
    if (accountRequired && !accounts[0]) {
      return <p>{'get or unlock metamask!'}</p>
    } else {
      return (
        <div className={classes.flexContainer}>
          <Grid container justify="center">
            {paper ? (
              <Grid item lg={8} md={12} sm={12} xl={8} xs={12}>
                <Paper className={classes.padded}>{children}</Paper>
              </Grid>
            ) : (
              <Grid item lg={4} md={5} sm={6} xl={3} xs={12}>
                {children}
              </Grid>
            )}
          </Grid>
        </div>
      )
    }
  } else {
    return <BlockchainLoading />
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleInitialized: state.drizzleStatus.initialized
  }
}

export default withStyles(styles)(
  drizzleConnect(BlockchainPage, mapStateToProps)
)
