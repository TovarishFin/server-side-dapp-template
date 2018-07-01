import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Page from '../layout/Page'

const styles = theme => ({
  sampleText: {
    color: theme.palette.primary.main
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
        <Typography
          align="center"
          className={classes.sampleText}
          variant="title"
        >
          {'Default DApp text'}
        </Typography>
      </Page>
    )
  }
}

export default withStyles(styles)(Home)
