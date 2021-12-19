import React from 'react'
import { IconButton } from '@iotabots/components'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import { ModeContext } from '../contexts/Theme'

const ToggleMode: React.FC = () => {
  const { mode, toggleMode } = React.useContext(ModeContext)
  return (
    <IconButton
      sx={{ color: 'text.primary' }}
      onClick={() => toggleMode()}
    >
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon color='inherit' />
      ) : (
        <DarkModeRoundedIcon color='inherit' />
      )}
    </IconButton>
  )
}

export default ToggleMode
