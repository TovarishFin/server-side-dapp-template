import React from 'react'
import { withStyles } from 'material-ui/styles'
import Page from '../layout/Page'

const styles = theme => ({
  sampleText: {
    color: theme.palette.secondary.dark
  }
})

class Home extends React.Component {
  state = {
    isMobile: true
  }

  componentDidMount() {
    if (window.innerWidth > 960 && this.state.isMobile) {
      //eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        isMobile: false
      })
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Page>
        <p className={classes.sampleText}>{'working?'}</p>
      </Page>
    )
  }
}

export default withStyles(styles)(Home)
