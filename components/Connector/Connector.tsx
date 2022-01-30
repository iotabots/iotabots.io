/* eslint-disable max-len */
import React, { useRef, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'

import { Box, Button, Typography } from '@iotabots/components'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useEagerConnect, useInactiveListener } from '../../utils/hooks'
import { ProfilePicture } from '../ProfilePicture'


const ERROR_NO_ETH_PROVIDER =
  'No Wallet Browser Extension detected, install Browser Extension on desktop or visit from a dApp browser on mobile.'

const getErrorMessage = (error: Error): string => {
  if (error instanceof NoEthereumProviderError) {
    return ERROR_NO_ETH_PROVIDER
  }
  if (
    error instanceof UserRejectedRequestErrorInjected ||
    UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Wallet account.'
  }
  return 'An unknown error occurred. Check the console for more details.'
}

const Balance: React.FC = () => {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then(() => {
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
    return null
  }, [account, library, chainId, balance])

  return (
    <span>
      {/* eslint-disable-next-line no-nested-ternary */}
      {balance === null ? null : balance ? formatEther(balance) : '-'}
    </span>
  )
}

const boxStyles = {
  mt: 4,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  bgcolor: 'rgba(0,0,0,0.5)',
  borderRadius: '8px',
  p: 3
}

const Header: React.FC = () => {
  const { account } = useWeb3React()
  const [copySuccess, setCopySuccess] = useState('')
  const copyRef = useRef(null)

  function copyToClipboard(e): void {
    copyRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setCopySuccess('Copied!')
  }
  return (
    <Box justifyContent='center' textAlign='center'>
      <ProfilePicture />
      <form style={{ display: 'none' }}>
        <textarea ref={copyRef} value={account} />
      </form>
      {account && (
        <Box sx={boxStyles}>
          <Typography variant='button'>
            {`${account.substring(0, 5)}...${account.substring(
              account.length - 3,
              account.length
            )}`}
          </Typography>
          <Button
            size='small'
            variant='text'
            onClick={(e) => copyToClipboard(e)}
            endIcon={<ContentCopyIcon />}
          >
            Copy
          </Button>
        </Box>
      )}

      <Box sx={boxStyles}>
        <Typography>
          Balance
        </Typography>
        <Typography>
          <Balance />
        </Typography>
      </Box>
    </Box>
  )
}

const Connector: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { connector, deactivate, active, error } = context

  // handle logic to recognize the connector currently being activated
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  /* handle logic to eagerly connect to the injected ethereum provider, 
  if it exists and has granted access already */
  const triedEager = useEagerConnect()

  /* handle logic to connect in reaction to certain events on the 
  injected ethereum provider, if it exists */
  useInactiveListener({ suppress: !triedEager || !!activatingConnector })

  return (
    <>
      <Header />
      {/* eslint-disable-next-line no-nested-ternary */}
      {active ? (
        <Button
          style={{ display: 'none' }}
          size='large'
          variant='contained'
          onClick={() => {
            deactivate()
          }}
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
      ) : (
        'connect'
      )}

      {error && (
        <Typography variant='body1' paragraph>
          {getErrorMessage(error)}
        </Typography>
      )}
    </>
  )
}

export default Connector
