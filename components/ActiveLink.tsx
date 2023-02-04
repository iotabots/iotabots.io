import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import { Box } from '@ccdao/components'

interface ActiveLinkProps extends LinkProps {
  label: string
}

const ActiveLink = (props: ActiveLinkProps): JSX.Element => {
  const { label, href } = props
  const { pathname } = useRouter()

  return (
    <Box
      className={pathname === href ? 'active' : ''}
      sx={{
        '& a': {
          minWidth: '100px',
          height: '42px',
          px: 5,
          textAlign: 'center',
          fontFamily: 'Sarpanch',
          fontSize: 18,
          fontWeight: '600',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'common.white'
        },

        '&.active a': {
          bgcolor: 'rgba(255,255,255,1)',
          color: 'background.paper',
        },
        '& a:hover': {
          bgcolor: 'primary.main',
          color: 'common.white',
        },
      }}
    >
      <Link {...props}>{label}</Link>
    </Box>
  )
}

export default ActiveLink
