import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'
import { Box, Container, Typography } from '@iotabots/components'
import { ProjectMeta } from '../interfaces/project'
import styles from '../styles/Card.module.scss'

interface IProps {
  project: ProjectMeta
}

const ProjectCard: React.FC<IProps> = ({ project }) => (
  <Link href={`/projects/${project.slug}`}>
    <div className={styles.card}>
      <Image
        width={500}
        height={500}
        layout='intrinsic'
        src={project.thumbnail}
        alt={project.description}
      />

      <div className={styles.info}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  </Link>
)

export default ProjectCard
