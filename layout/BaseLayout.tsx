import React from 'react'
import { Box, makeStyles, Theme } from '@iotabots/components'

const BaseLayout: React.FC = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <Box className={classes.root} pt='64px'>
      {children}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      background: theme.palette.background.gradient
    }
  }
})


export default BaseLayout
