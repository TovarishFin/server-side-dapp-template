import { pathOr } from 'ramda'
import { zeroAddress } from '../utils/ethereum'

export const coinbaseSelector = state =>
  pathOr(zeroAddress, ['accounts', '0'], state)

export const networkSelector = state =>
  pathOr('1', ['web3', 'networkId'], state)
