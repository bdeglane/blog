import React from 'react'
import { bool, node, string } from 'prop-types'
import cx from 'classnames'

import styles from './header.module.css'

Header.propTypes = {
  children: node,
  className: string,
  background: bool,
}

Header.defaultProps = {
  children: null,
  className: '',
  background: false,
}

export function Header({ children, background, className }) {
  return (
    <header className={cx(styles.header, {
      [styles.headerBackground]: background,
    }, className)}>
      {children}
    </header>
  )
}
