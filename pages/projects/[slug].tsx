import fs from 'fs'
import matter from 'gray-matter'
import * as React from 'react'
import styles from '../../styles/Project.module.scss'
import { ProjectInfo } from '../../interfaces/project'
import Markdown from '../../components/Markdown'

interface IProps {
  project: ProjectInfo
}

const Project: React.FC<IProps> = ({ project }) => (
  <div className={styles.project}>
    <div className={styles.thumbnail}>
      <img src={project.meta.thumbnail} alt={project.meta.description} />

      <div className={styles.title}>
        <h1>{project.meta.title}</h1>
      </div>
    </div>

    <div className={styles.content}>
      <Markdown content={project.content} />
    </div>
  </div>
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
