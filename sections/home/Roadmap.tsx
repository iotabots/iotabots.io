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
      title: 'Website Relaunch',
      description:
        'Better Teck Stack, UI Improvments and extern component library.',
      checked: true,
    },
    {
      title: 'Rebranding & Relaunch',
      description: 'Better branding, better UI / UX, better structure.',
      checked: true,
    },
    {
      title: 'Indroducting Soonabots',
      description:
        'Soonabots is a subset of IOTABOTS and unique 3D animated NFTs - this is completly new in the whole NFT space. Become member in our Soonaverse space and be ready in March',
      checked: false,
    },
    {
      title: 'IOTABOTS Trading Card Game',
      description:
        'Announcing the phisical IOTABOTS Trading Card Game (TCG) with all cards, rules and order details.',
      checked: false,
    },
    {
      title: 'BOLTS Token Announcement',
      description:
        'Announcing that there will be a Token called $BOLTS tradeable on SHIMMERSEA and other exchanges. We will explain the distributions, tokenemics and what we have in mind to do with the token.',
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
