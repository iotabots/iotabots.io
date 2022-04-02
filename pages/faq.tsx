import * as React from 'react'
import {
  BaseLayout,
  Container,
  ContentBox,
  Section,
  SectionHeader,
//  Typography
} from '@iotabots/components'

const FAQ: React.FC = () => (
  <BaseLayout>
    <Section>
      <SectionHeader
        title='FAQ'
        subtitle='The most important questions are collected here.'
      />
      <Container>
        <ContentBox
          image='http://assets.iotabots.io/compressed/11.png'
          // eslint-disable-next-line max-len
          text='An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet.'
          headline='WHAT IS AN IOTABOT?!'
        >
          { }
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/987.png'
          // eslint-disable-next-line max-len
          text='Right now there are 1048 IOTABOTS, 1001 SPACEBOTS and 3333 SOONABOTS.' 
          headline='How many NFTs exist right now?'
        >
          { }
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/990.png'
          // eslint-disable-next-line max-len
          text='10.000 unique IOTABOTS, 1001 SPACEBOTS, 3333 SOONABOTS and tbd NATUREBOTS.'
          headline='How many NFTs will exist?'
        >
          { }
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/187.png'
          // eslint-disable-next-line max-len
          text='Current IOTABOTS are deployed on the tesnet. The SaveTheBots initiative tries to make a successfull transition to the mainnet - so the users can hold their IOTABOTS.'
          headline='What does SaveTheBots mean?'
        >
          { }
        </ContentBox>
        <ContentBox
          image=''
          // eslint-disable-next-line max-len
          text='All currently existing IOTABOTS and SPACEBOTS were given away for free and can no longer be acquired. The sale of the SOONABOTS is still live on SOONAVERSE where you can get one for 100 MIOTA. Here is the link where you can buy some SOONABOTS: https://soonaverse.com/collection/0xeb47806ef8d4c908179bd05eeabc20bc3de8c81a'
          headline='How can I get NFTs?'
        >
          { }
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/845.png'
          // eslint-disable-next-line max-len
          text='Download your favourite IOTABOT or SOONABOT and use it as a profile picture. The SOONABOT is a fully animated BOT. Your SPACEBOT gives you access to a NFT game.'
          headline='What can I do with my BOTs?'
        >
          { }
        </ContentBox>
        <ContentBox
          image=''
          // eslint-disable-next-line max-len
          text='Use the following link for the instructions to download the animated version of your SOONABOT: http://docs.iotabots.io/faq#soonabots '
          headline='How do i get the animated SOONABOT version as my profile picture?'
        >
          { }
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/895.png'
          // eslint-disable-next-line max-len
          text='You need Metamask with the following custom network settings: RPC URL = https://evm.wasp.sc.iota.org and Chain ID = 1074'
          headline='How can i connect to the public IOTA EVM testnet?'
        >
          { }
        </ContentBox>
      </Container>
    </Section>
  </BaseLayout>
)

export default FAQ
