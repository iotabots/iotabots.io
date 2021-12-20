import * as React from 'react'
import { Box, Container, ContentBox } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'

const FAQ: React.FC = () => (
  <BaseLayout>
    <Box py={8} bgcolor="background.default">
      <Container>
        <ContentBox
          image="http://assets.iotabots.io/compressed/11.png"
          // eslint-disable-next-line max-len
          text="An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet."
          title="WHAT IS AN IOTABOT?!"
        />
        <ContentBox
          image="http://assets.iotabots.io/compressed/987.png"
          // eslint-disable-next-line max-len
          text="1048 - OThe first 1000 IOTABOTS could be minted for free - the other was randomly choosen in Givaways mostly on Twitter."
          title="How many NFTs exist?"
        />
        <ContentBox
          image="http://assets.iotabots.io/compressed/990.png"
          // eslint-disable-next-line max-len
          text="10.000 unique IOTABOTS."
          title="How many NFTs will exist?"
        />
        <ContentBox
          image="http://assets.iotabots.io/compressed/187.png"
          // eslint-disable-next-line max-len
          text="Current IOTABOTS are deployed on the tesnet. The SaveTheBots initiative tries to make a successfull transition to the mainnet - so the users can hold their IOTABOTS."
          title="What does SaveTheBots mean?"
        />
        <ContentBox
          image="http://assets.iotabots.io/compressed/845.png"
          // eslint-disable-next-line max-len
          text="Download you favourite one and use it as a profile picture."
          title="What can I do with my IOTABOT?"
        />
      </Container>
    </Box>
  </BaseLayout>
)

export default FAQ
