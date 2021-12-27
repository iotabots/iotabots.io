import ReactMarkdown from 'react-markdown'
import {
  NormalComponents,
  SpecialComponents,
} from 'react-markdown/src/ast-to-react'
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { FunctionComponent } from 'react'

interface IProps {
  content: string
}

const Markdown: FunctionComponent<IProps> = ({ content }) => {
  const components: Partial<NormalComponents & SpecialComponents> = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')

      return !inline && match ? (
        <SyntaxHighlighter
          style={materialLight}
          PreTag='div'
          language={match[1]}
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className || ''} {...props}>
          {children}
        </code>
      )
    },
  }

  return (
    <div className='markdown-body'>
      <ReactMarkdown components={components} children={content} />
    </div>
  )
}

export default Markdown
