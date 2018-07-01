import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { drizzleConnect } from 'drizzle-react'
import { ContractData } from 'drizzle-react-components'
import BlockchainPage from '../layout/BlockchainPage'

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
      <BlockchainPage>
        <Typography
          align="center"
          className={classes.sampleText}
          variant="title"
        >
          {'ExampleToken'}{' '}
        </Typography>{' '}
        <ContractData contract="ExampleToken" method="name" />
        <ContractData contract="ExampleToken" method="symbol" />
        <ContractData contract="ExampleToken" method="decimals" />
      </BlockchainPage>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    ExampleToken: state.contracts.ExampleToken
  }
}

export default withStyles(styles)(drizzleConnect(Home, mapStateToProps))
