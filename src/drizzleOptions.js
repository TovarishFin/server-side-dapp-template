import ExampleToken from '../build/contracts/ExampleToken'

export const options = {
  contracts: [ExampleToken],
  polls: {
    accounts: 5000,
    blocks: 15000
  },
  events: {
    ExampleToken: ['Transfer', 'Approval']
  },
  syncaAlways: true,
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  }
}

export default options
