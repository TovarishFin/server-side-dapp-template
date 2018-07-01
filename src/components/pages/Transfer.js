import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { drizzleConnect } from 'drizzle-react'
import { ContractData } from 'drizzle-react-components'
import BlockchainPage from '../layout/BlockchainPage'
import { coinbaseSelector } from '../../selectors/network'
import MaterialContractForm from '../common/MaterialContractForm'

const styles = theme => ({
  sampleText: {
    color: theme.palette.primary.main
  }
})

const Transfer = ({ classes, coinbase }) => (
  <BlockchainPage accountRequired>
    <Typography align="center" className={classes.sampleText} variant="title">
      {'Transfer EXT'}
    </Typography>

    <Typography className={classes.sampleText} variant="caption">
      {'Your EXT balance'}
    </Typography>
    <ContractData
      contract="ExampleToken"
      method="balanceOf"
      methodArgs={[coinbase]}
    />
    <MaterialContractForm
      contract="ExampleToken"
      labels={['transfer to', 'amount to transfer']}
      method="transfer"
    />
  </BlockchainPage>
)

const mapStateToProps = state => {
  return {
    coinbase: coinbaseSelector(state),
    ExampleToken: state.contracts.ExampleToken
  }
}

export default withStyles(styles)(drizzleConnect(Transfer, mapStateToProps))
