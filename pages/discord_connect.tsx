import * as React from 'react'
import {
  BaseLayout,
  Container,
  Section,
  SectionHeader,
  Typography,
} from '@ccdao/components'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useRouter } from 'next/router'
import { BACKEND_URL } from '../config'

const FAQ: React.FC = (props: any) => {
  const context = useWeb3React<Web3Provider>()
  const router = useRouter()

  const { account, library } = context

  const init = async (): Promise<void> => {
    const { code } = router.query

    const signer = library.getSigner()
    const randomNumber = Math.floor(100000 + Math.random() * 900000)
    const nonce = `${randomNumber}`
    const signature = await signer.signMessage(nonce)
    const data = {
      discordCode: code,
      signature,
      nonce,
    }
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log('res', res)
  }
  React.useEffect(() => {
    if (!!account || !!library) {
      init()
    }
  })
  return (
    <BaseLayout>
      <Section>
        <SectionHeader
          title='Discord Connect'
          subtitle='Connect your MetaMask Address with your 
          Discord Handle to become a special IOTABOTS role.'
        />
        <Container maxWidth='md'>
          <Typography variant='body2'>Connect with Discord</Typography>
        </Container>
      </Section>
    </BaseLayout>
  )
}

export default FAQ
