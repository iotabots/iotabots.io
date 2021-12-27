interface ArticleMeta {
  title: string
  slug: string
  description: string
  humbnail: string
}

interface ArticleInfo {
  meta: ArticleMeta
  content: string
}

export type { ArticleMeta, ArticleInfo }
