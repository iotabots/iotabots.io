import React from 'react'
import { TextField } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

interface SearchProps {
  value: number | string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const Search: React.FC<SearchProps> = (props) => {
  const { value, onChange } = props
  return (
    <TextField
      variant='filled'
      placeholder='Search by number'
      label='Find by number'
      size='medium'
      fullWidth
      type='number'
      value={value}
      InputProps={{ endAdornment: <SearchRoundedIcon /> }}
      onChange={onChange}
      sx={{
        mb: 6,
        bgcolor: 'rgba(0,0,0,0.5)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    />
  )
}
export default Search
