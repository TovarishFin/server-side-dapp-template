import React from 'react'
import Page from '../layout/Page'
import Typography from 'material-ui/Typography'

const Error = () => (
  <Page paper>
    <Typography align="center" variant="title">
      {'Oops! An error occurred...'}
    </Typography>
    <Typography align="center">{`ERROR: ${window.error.message}`}</Typography>
  </Page>
)

export default Error
