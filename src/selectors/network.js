import { pathOr } from 'ramda'
import { zeroAddress } from '../utils/ethereum'

export const coinbaseSelector = state =>
  pathOr(zeroAddress, ['contracts', 'coinbase'], state)

export const blockNumberSelector = state =>
  pathOr(0, ['contracts', 'blockNumber'], state)

export const ethLoadinginfoTextSelector = state =>
  pathOr('default info text', ['contracts', 'ethLoading', 'infoText'], state)

export const ethLoadingTxidSelector = state =>
  pathOr(null, ['contracts', 'ethLoading', 'txid'], state)

export const ethLoadingOpenSelector = state =>
  pathOr(false, ['contracts', 'ethLoading', 'open'], state)

export const ethLoadingTitleSelector = state =>
  pathOr('default title', ['contracts', 'ethLoading', 'title'], state)

export const ethLoadingSubtitleSelector = state =>
  pathOr('default subtitle', ['contracts', 'ethLoading', 'subtitle'], state)

export const ethLoadingTimeoutSelector = state =>
  pathOr(0, ['contracts', 'ethLoading', 'timeout'], state)

export const ethLoadingMaxTimeoutSelector = state =>
  pathOr(60000, ['contracts', 'maxTimeout'], state)

export const networkSelector = state =>
  pathOr('1', ['contracts', 'network'], state)

export const loggedEventSelector = (state, txid) =>
  pathOr(null, ['contracts', 'loggedEvents', txid], state)
