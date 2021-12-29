import React from 'react'
import { Avatar, Badge, Tooltip } from '@iotabots/components'
import { styled } from '@mui/material/styles'

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
export const ProfilePicture: React.FC = () => (
  <Tooltip title='Profile'>
    <StyledBadge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
    >
      <Avatar
        alt='IOTABOT #1'
        src='https://assets.iotabots.io/compressed/1.png'
        sx={{ width: 240, height: 240 }}
      />
    </StyledBadge>
  </Tooltip>
)
