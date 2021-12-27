import styles from '../styles/Projects.module.scss'
import Card from '../components/Card'
import fs from 'fs'
import matter from 'gray-matter'
import { ArticleMeta } from '../interfaces/article'
import { FunctionComponent } from 'react'

interface IProps {
  articles: ArticleMeta[]
}

const Projects: FunctionComponent<IProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map((article, i) => (
        <Card key={i} article={article} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync('projects')

  let articles = files.map((file) => {
    const data = fs.readFileSync(`projects/${file}`).toString()

    return {
      ...matter(data).data,
      slug: file.split('.')[0],
    }
  })

  return {
    props: {
      articles: articles,
    },
  }
}

export default Projects
