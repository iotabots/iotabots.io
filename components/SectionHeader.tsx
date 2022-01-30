import { Container, Typography } from '@mui/material'
import React from 'react'

interface SectionHeaderProps {
  title: string
  subtitle: string
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { title, subtitle } = props
  return (
    <Container sx={{ mb: 8 }} maxWidth='sm'>
      <Typography
        variant='h1'
        component='h2'
        textAlign='center'
      >
        {title}
      </Typography>
      <Typography
        variant='subtitle1'
        textAlign='center'
        color='rgba(255,255,255,0.66)'
      >
        {subtitle}
      </Typography>
    </Container>
  )
}

export default SectionHeader
