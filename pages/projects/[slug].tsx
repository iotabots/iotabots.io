import * as React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import {
  BaseLayout,
  Box,
  Container,
  Section,
  SectionHeader
} from '@iotabots/components'
import { ProjectInfo } from '../../interfaces/project'
import Markdown from '../../components/Markdown'

import styled from 'styled-components'
import Image from '../../components/ImageLoader'

interface IProps {
  project: ProjectInfo
}

// const Project: React.FC<IProps> = ({ project }) => (
//   <BaseLayout>
//     <Section>
//       <SectionHeader title={project.meta.title} subtitle='' />
//       <Container maxWidth='sm'>
//         <Box
//           component='img'
//           sx={{
//             borderRadius: '8px',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             height: '320px',
//             border: 'none',
//             width: '100%',
//             background: `url(${project.meta.thumbnail})`,
//           }}
//         />
//         <Markdown content={project.content} />
//       </Container>
//     </Section>
//   </BaseLayout>
// )

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
            imageWidth="400px" 
            imageHeight= "100%"
            border_radius="8px" 
            border="solid white 0.001em"
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
