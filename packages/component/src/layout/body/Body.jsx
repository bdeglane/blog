import React from 'react'
import { node, string } from 'prop-types'
import cx from 'classnames'

import styles from './Body.module.css'

Body.propTypes = {
  children: node,
  className: string,
}

Body.defaultProps = {
  children: null,
  className: '',
}

export function Body({ children, className }) {
  return (
    <section className={cx(styles.body, className)}>
      {children}
    </section>
  )
}
