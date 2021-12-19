import React from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'

import { useEagerConnect, useInactiveListener } from '../../utils/hooks'
import { Box, Divider, Button } from '@iotabots/components'

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Wallet Browser Extension detected, install Browser Extension on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (error instanceof UserRejectedRequestErrorInjected || UserRejectedRequestErrorWalletConnect) {
    return 'Please authorize this website to access your Wallet account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function BlockNumber() {
  const { chainId, library } = useWeb3React()

  const [blockNumber, setBlockNumber] = React.useState<number>()
  React.useEffect((): any => {
    if (!!library) {
      let stale = false

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null)
          }
        })

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
  }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return <span>{blockNumber === null ? 'Error' : blockNumber ?? '-'}</span>
}

function Account() {
  const { account } = useWeb3React()

  return (
    <span>
      {account === null ? '-' : account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : '-'}
    </span>
  )
}

function Balance() {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return <span>{balance === null ? null : balance ? formatEther(balance) : '-'}</span>
}

function Header() {
  const { active, error } = useWeb3React()

  const { account, library, chainId } = useWeb3React()

  return (
    <>
      <h5>Status: {active ? '🟢' : error ? '🔴' : '🟠'}</h5>
      <h5>chainId: {chainId ? chainId : '-'}</h5>
      <h5>
        BlockNumber: <BlockNumber />
      </h5>
      <h5>address: {account ? account : '-'}</h5>
      <h5>
        Balance:<Balance />
      </h5>
    </>
  )
}

function Connector() {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  return (
    <>
      <Header />
      {active ? (
        <Button
          size='large'
          variant='contained'
          onClick={() => { deactivate() }}
        >
          Disconnect
        </Button>
      ) : error ? (
        <Button
        size='large'
          variant='contained'
          onClick={() => {
            deactivate()
          }}
        >
          Cancel Connect
        </Button>
      ) :
      (
        'connect'
      )}

      {error && (
        <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>
          {getErrorMessage(error)}
        </h4>
      )}

      <Divider sx={{ my: 6 }} />

      <Box>
        {library && account && (
          <Button
            size='large'
            fullWidth
            variant='contained'
            onClick={() => {
              library
                .getSigner(account)
                .signMessage('👋')
                .then((signature: any) => {
                  console.log(`Success!\n\n${signature}`)
                })
                .catch((error: any) => {
                  console.log('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
                })
            }}
          >
            Sign Message
          </Button>
        )}
      </Box>
    </>
  )
}

export default Connector