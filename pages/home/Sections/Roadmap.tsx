/* eslint-disable max-len */
import React from 'react'
import { Container, Timeline } from '@iotabots/components'
import Section from '../../../components/Section'
import SectionHeader from '../../../components/SectionHeader'

const data = {
  title: 'Roadmap',
  subtitle: 'This is what we already achieved and what is in the workings - stay tuned.',
  data: [
    {
      title: 'Drop #1',
      description: 'Free drop of 500 unique IOTABOTS NFTs from Number 1-500.',
      checked: true
    },
    {
      title: 'Drop #2',
      description: 'Free drop of 500 unique IOTABOTS NFTs from Number 501-1000.',
      checked: true
    },
    {
      title: 'Drop #3',
      description: 'Free drop of 1001 Spacebots Game NFT.',
      checked: true
    },
    {
      title: 'Twitter Giveaways',
      description: 'Everyday Giveaways on Twitter.',
      checked: true
    },
    {
      title: 'Website Relaunch',
      description: 'Better Teck Stack, UI Improvments and extern component library.',
      checked: true
    },
    {
      title: 'Rebranding & Relaunch',
      description: 'Better branding, better UI / UX, better structure.',
      checked: false
    },
  ]
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
