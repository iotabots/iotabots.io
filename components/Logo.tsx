import React from 'react'
import { Logo as BotsLogo } from '@iotabots/components'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href='/'>
    <BotsLogo />
  </Link>
)

export default Logo
