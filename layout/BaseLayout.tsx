import React from 'react'
import { Box, makeStyles, Theme } from '@iotabots/components'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.gradient,
    minHeight: 'calc(100vh - 140px)'
  }
}))

const BaseLayout: React.FC = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <Box className={classes.root} pt='64px'>
      {children}
    </Box>
  )
}

export default BaseLayout
