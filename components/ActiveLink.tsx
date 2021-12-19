import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import { Box } from '@iotabots/components'

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
          fontSize: '16px'
        },
        '&.active': {
          color: 'primary.main'
        }
      }}
    >
      <Link {...props}>
        {label}
      </Link>
    </Box>
  )
}

export default ActiveLink