import React from 'react'
import { element } from 'prop-types'

import styles from './Grid.module.css'

Grid.propTypes = {
  children: element,
}

Grid.defaultProps = {
  children: null,
}

export function Grid({ children }) {
  return (
    <section className={styles.grid}>
      {children}
    </section>
  )
}
