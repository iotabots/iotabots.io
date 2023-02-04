import React from 'react'
// import { Logo as BotsLogo } from '@ccdao/components'
import { Logo as CCLogo } from '@ccdao/components'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href='/'>
    <CCLogo />
  </Link>
)

export default Logo
