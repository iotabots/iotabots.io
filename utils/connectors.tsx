import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const RPC_URLS: { [chainId: number]: string } = {
  1071: process.env.RPC_URL_IOTA_EVM as string,
}

export const injected = new InjectedConnector({
  supportedChainIds: [1071]
})

export const network = new NetworkConnector({
  urls: { 1071: RPC_URLS[1071] },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  qrcode: true
})
