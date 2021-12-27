import Link from 'next/link'
import * as React from 'react'
import { ArticleMeta } from '../interfaces/article'
import styles from '../styles/Card.module.scss'

interface IProps {
  article: ArticleMeta
}

const Card: React.FC<IProps> = ({ article }) => (
  <Link href={`/projects/${article.slug}`}>
    <div className={styles.card}>
      <img src={article.thumbnail} alt={article.description} />

      <div className={styles.info}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    </div>
  </Link>
)

export default Card
