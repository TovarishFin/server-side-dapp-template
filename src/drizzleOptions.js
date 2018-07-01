import ExampleToken from '../build/contracts/ExampleToken'

export const options = {
  contracts: [ExampleToken],
  polls: {
    accounts: 2000,
    blocks: 3000
  },
  events: {
    ExampleToken: ['Transfer', 'Approval']
  },
  syncAlways: true,
  web3: {
    block: true,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  }
}

export default options
