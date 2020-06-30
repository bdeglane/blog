import React from 'react'
import { Router } from '@reach/router'
import { GridExperimentPage } from '@experiment/grid'
import { Layout } from '../components/layout'

export default function () {
  return (
    <Layout>
      <Router>
        <GridExperimentPage path="/app/test" />
      </Router>
    </Layout>
  )
}
