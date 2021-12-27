import Link from 'next/link'
import { FunctionComponent } from 'react'
import { ArticleMeta } from '../interfaces/article'
import styles from '../styles/Card.module.scss'

interface IProps {
  article: ArticleMeta
}

const Card: FunctionComponent<IProps> = ({ article }) => (
  <Link href={`/projects/${article.slug}`}>
    <div className={styles.card}>
      <img src={article.thumbnail} />

      <div className={styles.info}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    </div>
  </Link>
)

export default Card
