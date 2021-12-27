import fs from 'fs'
import matter from 'gray-matter'
import * as React from 'react'
import styles from '../styles/Projects.module.scss'
import Card from '../components/Card'
import { ArticleMeta } from '../interfaces/article'

interface IProps {
  articles: ArticleMeta[]
}

const Projects: React.FC<IProps> = ({ articles }) => (
  <div className={styles.container}>
    {articles.map((article) => (
      <Card key={article.slug} article={article} />
    ))}
  </div>
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps() {
  const files = fs.readdirSync('projects')

  const articles = files.map((file) => {
    const data = fs.readFileSync(`projects/${file}`).toString()

    return {
      ...matter(data).data,
      slug: file.split('.')[0],
    }
  })

  return {
    props: {
      articles,
    },
  }
}

export default Projects
