module.exports = {
  reactStrictMode: true,
  env: {
    RPC_URL_IOTA_EVM: 'https://json-rpc.evm.testnet.shimmer.network',
  },
  images: {
    loader: 'imgix',
    path: '',
    domains: ['assets.iotabots.io'],
  },
}
