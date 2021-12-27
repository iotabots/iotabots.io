import ReactMarkdown from 'react-markdown'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'
import * as React from 'react'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface IProps {
  content: string
}

const Markdown: React.FC<IProps> = ({ content }) => {
  const components: Partial<SpecialComponents> = {
    // eslint-disable-next-line react/no-unstable-nested-components
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')

      return !inline && match ? (
        <SyntaxHighlighter style={dark} language='javascript'>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className || ''} {...props}>
          {children}
        </code>
      )
    },
  }

  return (
    <div className='markdown-body'>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  )
}

export default Markdown
