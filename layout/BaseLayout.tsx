import React from 'react'
import { Box, makeStyles, Theme } from '@iotabots/components'

const BaseLayout: React.FC = (props) => {
  const { children } = props
  const classes = useStyles()

  return <Box className={classes.root}>{children}</Box>
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.gradient,
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}))

export default BaseLayout
