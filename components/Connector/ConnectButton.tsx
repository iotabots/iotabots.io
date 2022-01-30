import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '@iotabots/components'
import { Box, Typography } from '@mui/material'
import { useEagerConnect, useInactiveListener } from '../../utils/hooks'
import { injected } from '../../utils/connectors'
import Wallet from '../Icons/Wallet'

enum ConnectorNames {
  Injected = 'Connect',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
}

const ConnectButton: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { connector, activate, error } = context

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  /* handle logic to eagerly connect to the injected ethereum provider, 
    if it exists and has granted access already */
  const triedEager = useEagerConnect()

  /* handle logic to connect in reaction to certain events on the injected
    ethereum provider, if it exists */
  useInactiveListener({ suppress: !triedEager || !!activatingConnector })

  const currentConnector = connectorsByName.Connect
  const activating = currentConnector === activatingConnector
  const connected = currentConnector === connector
  const disabled = !triedEager || !!activatingConnector || connected || !!error

  return (
    <Button
      disabled={disabled}
      key='Connect'
      size='small'
      onClick={() => {
        setActivatingConnector(currentConnector)
        activate(connectorsByName.Connect)
      }}
      sx={{
        '&.MuiButton-containedPrimary': {
          borderRadius: '50px',
          maxWidth: 'auto',
          minWidth: 'auto',
          width: 50,
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'rgba(0,0,0,0.5)',
          borderColor: 'rgba(0,0,0,0.5)',
          '&:hover': {
            bgcolor: 'primary.main',
          }
        }
      }}
    >
      <Box sx={{
        height: 20,
        width: 20,
        '& svg': {
          height: 'inherit',
          width: 'inherit',
        }
      }}>
        {activating ? <Typography>...</Typography> : <Wallet />}
      </Box>
    </Button>
  )
}

export default ConnectButton
