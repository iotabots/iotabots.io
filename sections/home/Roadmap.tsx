/* eslint-disable max-len */
import React from 'react'
import {
  Container,
  Section,
  SectionHeader,
  Timeline,
} from '@iotabots/components'

const data = {
  title: 'Roadmap',
  subtitle:
    'This is what we already achieved and what is in the workings - stay tuned.',
  data: [
    {
      title: 'Drop #1',
      description: 'Free drop of 500 unique IOTABOTS NFTs from Number 1-500.',
      checked: true,
    },
    {
      title: 'Drop #2',
      description:
        'Free drop of 500 unique IOTABOTS NFTs from Number 501-1000.',
      checked: true,
    },
    {
      title: 'Drop #3',
      description: 'Free drop of 1001 Spacebots Game NFT.',
      checked: true,
    },
    {
      title: 'Christmas Advent Calendar',
      description:
        'Free giveaways of IOTABOTS everyday to Christmas 2021 on Twitter.',
      checked: true,
    },
    {
      title: 'Website Relaunch #1',
      description:
        'Better Teck Stack, UI Improvments and extern component library.',
      checked: true,
    },
    {
      title: 'IOTABOTS TCG Giveaway #1',
      description:
        'Giveaway of 10 IOTA TCG Card Sets each containing 50 Cards (physical version).',
      checked: true,
    },
    {
      title: 'SOONLABS x IOTABOTS Announcement',
      description:
        'Announcing the partnership between SOONLABS & IOTABOTS and the sale of SOONABOTS on SOONAVERSE.',
      checked: true,
    },
    {
      title: 'SHIMMERSEA x IOTABOTS Announcement',
      description: 'Announcing the partnership between SHIMMERSEA & IOTABOTS.',
      checked: true,
    },
    {
      title: 'MOONACO Postcast x IOTABOTS',
      description: 'Being on the MOONACO PODCAST promoting IOTABOTS.',
      checked: true,
    },
    {
      title: 'Open IOTABOTS Discord',
      description: 'Opening IOTABOTS Discord server to the public.',
      checked: true,
    },
    {
      title: 'Website Relaunch #2 - Rebranding',
      description: 'Better branding, better UI / UX, better structure.',
      checked: true,
    },
    {
      title: 'BOLTS Token Announcement',
      description:
        'Announcing that there will be a Token called $BOLTS tradeable on SHIMMERSEA and other exchanges. We will explain the distributions, tokenemics and what we have in mind to do with the token.',
      checked: true,
    },
    {
      title: 'Indroducting Soonabots',
      description:
        'Revealing the design of the SOONABOT. SOONABOTS are a subset of IOTABOTS and are unique 3D animated NFTs - this is completly new in the whole NFT space. Become member in our Soonaverse space and be ready in March.',
      checked: true,
    },
    {
      title: 'SOONABOTS Giveaway',
      description: 'Giveaway of 10 SOONABOTS on Twitter.',
      checked: false,
    },
    {
      title: 'SOONABOTS SALE',
      description: 'Selling XXXX unique and animated SOONABOTS on SOONAVERSE.',
      checked: false,
    },
    {
      title: 'Announcing $SCREWS',
      description: 'Announcing the inflationary token for the IOTABOTS METAVERSE.',
      checked: false,
    },
    {
      title: 'IOTABOTS Trading Card Game',
      description:
        'Announcing the physical IOTABOTS Trading Card Game (TCG) with all cards, rules and order details.',
      checked: false,
    },
    {
      title: 'IOTABOTS TCG Giveaway #2',
      description:
        'Giveaway of 10 IOTA TCG Card Sets each containing 50 Cards (physical version).',
      checked: false,
    },
    {
      title: 'IOTABOTS TCG Sale',
      description:
        'Selling ~XXXX physical Sets of the IOTABOTS Trading Card Game (TCG)',
      checked: false,
    },
    {
      title: '$BOLTS Tokenomics reveal',
      description: 'Revealing the tokenomics of the $BOLTS Token.',
      checked: false,
    },
    {
      title: '$BOLTS Token Launch',
      description: 'Launching the $BOLTS token on SHIMMERSEA.',
      checked: false,
    },
    {
      title: 'NATURE DAO Announcement',
      description: 'More information soon.',
      checked: false,
    },
    {
      title: 'Revealing NATUREBOTS',
      description: 'More information soon.',
      checked: false,
    },
    {
      title: 'IOTABOTS TCG NFT Announcement',
      description: 'More information soon.',
      checked: false,
    },
    {
      title: 'IOTABOTS TCG NFT Sale',
      description: 'More information soon.',
      checked: false,
    },
  ],
}

const RoadmapSection: React.FC = () => (
  <Section>
    <SectionHeader title={data.title} subtitle={data.subtitle} />
    <Container maxWidth='md'>
      {data.data.map(({ checked, title, description }) => (
        <Timeline checked={checked} title={title}>
          {description}
        </Timeline>
      ))}
    </Container>
  </Section>
)

export default RoadmapSection
