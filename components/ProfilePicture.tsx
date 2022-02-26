import { Avatar, Badge, Box, Typography } from '@iotabots/components'
import { Popper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useWeb3React } from '@web3-react/core'
import React from 'react'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.success,
    color: theme.palette.success,
    boxShadow: `0 0 0 2px ${theme.palette.background.default}`,
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: `1px solid ${theme.palette.success}`,
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))
const BlockNumber: React.FC = () => {
  const { chainId, library } = useWeb3React()
  const [blockNumber, setBlockNumber] = React.useState<number>()

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (library) {
      let stale = false

      library
        .getBlockNumber()
        .then((): void => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null)
          }
        })

      const updateBlockNumber = (): void => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
    /* ensures refresh if referential identity of library doesn't change 
    across chainIds */
  }, [library, chainId, blockNumber])

  return <span>{blockNumber === null ? 'Error' : blockNumber ?? '-'}</span>
}

export const ProfilePicture: React.FC<any> = ({ bots }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { active, error } = useWeb3React()

  const { chainId } = useWeb3React()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  // Determine bot to show as profile picture
  const botId = bots?.[0] || 1

  return (
    <>
      <StyledBadge
        overlap='circular'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant='dot'
        onClick={handleClick}
      >
        <Avatar
          alt={`IOTABOT #${botId}`}
          src={`https://assets.iotabots.io/compressed/${botId}.png`}
          sx={{ width: 140, height: 140 }}
        />
      </StyledBadge>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <Typography variant='body1' paragraph>
            {/* eslint-disable-next-line no-nested-ternary */}
            Status: {active ? '🟢' : error ? '🔴' : '🟠'}
          </Typography>
          <Typography variant='body1' paragraph>
            chainId: {chainId || '-'}
          </Typography>
          <Typography variant='body1' paragraph>
            BlockNumber: <BlockNumber />
          </Typography>
        </Box>
      </Popper>
    </>
  )
}
