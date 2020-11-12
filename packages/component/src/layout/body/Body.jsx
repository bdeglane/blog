import React from 'react'
import { bool, node, string } from 'prop-types'
import cx from 'classnames'

import styles from './Body.module.css'

Body.propTypes = {
  children: node,
  className: string,
  background: bool,
}

Body.defaultProps = {
  children: null,
  className: '',
  background: false,
}

export function Body({ children, className, background }) {
  return (
    <section className={cx({
      [styles.bodyBackground]: background,
    }, className)}>
      {children}
    </section>
  )
}
