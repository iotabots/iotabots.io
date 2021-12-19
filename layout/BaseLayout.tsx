import React from 'react'
import { Box, makeStyles, Theme } from '@iotabots/components'

const BaseLayout: React.FC = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <Box
      className={classes.root}
      sx={{ pt: { xs: '56px', sm: '64px' } }}
    >
      {children}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.gradient,
    minHeight: 'calc(100vh - 140px)'
  }
}))

export default BaseLayout