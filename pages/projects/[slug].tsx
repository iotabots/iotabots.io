import fs from 'fs'
import matter from 'gray-matter'
import * as React from 'react'
import styles from '../../styles/Article.module.scss'
import { ArticleInfo } from '../../interfaces/article'
import Markdown from '../../components/Markdown'

interface IProps {
  article: ArticleInfo
}

const Article: React.FC<IProps> = ({ article }) => (
  <div className={styles.article}>
    <div className={styles.thumbnail}>
      <img src={article.meta.thumbnail} alt={article.meta.description} />

      <div className={styles.title}>
        <h1>{article.meta.title}</h1>
      </div>
    </div>

    <div className={styles.content}>
      <Markdown content={article.content} />
    </div>
  </div>
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params

  const content = fs.readFileSync(`projects/${slug}.md`).toString()

  const info = matter(content)

  const article = {
    meta: {
      ...info.data,
      slug,
    },
    content: info.content,
  }

  return {
    props: {
      article,
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

export default Article
