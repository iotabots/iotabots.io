import * as React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import {
  BaseLayout,
  Container,
  Section,
  SectionHeader
} from '@iotabots/components'
import styled from 'styled-components'
import Image from '../../components/ImageLoader'
import { ProjectInfo } from '../../interfaces/project'
import Markdown from '../../components/Markdown'



interface IProps {
  project: ProjectInfo
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Project: React.FC<IProps> = ({ project }) => (
  <BaseLayout>
    <Section>
      <SectionHeader title={project.meta.title} subtitle='' />
      <Container maxWidth='sm'>
        <ProjectContainer>
            <Image 
              imageUrl={project.meta.thumbnail} 
              width='400px'
              height= '100%'
              borderRadius='8px' 
              border='solid white 0.001em'
              />
          <Markdown content={project.content} />
        </ProjectContainer>
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
