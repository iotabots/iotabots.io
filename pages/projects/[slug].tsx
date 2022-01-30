import fs from 'fs'
import matter from 'gray-matter'
import * as React from 'react'
import { Container } from '@mui/material'
import { ProjectInfo } from '../../interfaces/project'
import Markdown from '../../components/Markdown'
import BaseLayout from '../../layout/BaseLayout'
import Section from '../../components/Section'
import SectionHeader from '../../components/SectionHeader'

interface IProps {
  project: ProjectInfo
}

const Project: React.FC<IProps> = ({ project }) => (
  <BaseLayout>
    <Section>
      <SectionHeader title={project.meta.title} subtitle='' />
      <Container maxWidth='md'>
        <img src={project.meta.thumbnail} alt={project.meta.description} />
        <Markdown content={project.content} />
      </Container>
    </Section>
  </BaseLayout>
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params

  const content = fs.readFileSync(`projects/${slug}.md`).toString()

  const info = matter(content)

  const project = {
    meta: {
      ...info.data,
      slug,
    },
    content: info.content,
  }

  return {
    props: {
      project,
    },
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticPaths() {
  const files = fs.readdirSync('projects')
  const paths = files.map((file) => ({
    params: {
      slug: file.split('.')[0],
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Project
