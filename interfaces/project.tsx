interface ProjectMeta {
  title: string
  slug: string
  description: string
  thumbnail: string
}

interface ProjectInfo {
  meta: ProjectMeta
  content: string
}

export type { ProjectMeta, ProjectInfo }
