import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link, { LinkProps } from 'next/link'
import React, { Children } from 'react'

interface ActiveLinkProps extends LinkProps {
  activeClassName: string
  children: JSX.Element
}

const ActiveLink = (props: ActiveLinkProps): JSX.Element => {
  const { children, activeClassName, href, as } = props
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === href || asPath === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href='something' {...props}>
      {
        React.cloneElement(child, {
          className: className || null,
        })
      }
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink