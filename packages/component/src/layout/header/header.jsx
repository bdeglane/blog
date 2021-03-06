import React from 'react'
import { node, string } from 'prop-types'
import cx from 'classnames'

import styles from './header.module.css'

Header.propTypes = {
  children: node,
  className: string,
}

Header.defaultProps = {
  children: null,
  className: '',
}

export function Header({ children, className }) {
  return (
    <header className={cx(styles.header, className)}>
      {children}
    </header>
  )
}
