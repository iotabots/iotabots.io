import React from 'react'
import {
  Avatar,
} from '@iotabots/components'
import { Box } from '@mui/material'
import Link from 'next/link'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import ConnectButton from '../Connector/ConnectButton'

const IdentityMenu: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { account } = context

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      {account ? (
        <Box sx={{ cursor: 'pointer' }}>
          <Link href='/profile'>
            <Avatar
              alt='IOTABOT #1'
              src='https://assets.iotabots.io/compressed/1.png'
              sx={{ width: 40, height: 40 }}
            />
          </Link>
        </Box >
      ) : <ConnectButton />}
    </Box>
  )
}

export default IdentityMenu
