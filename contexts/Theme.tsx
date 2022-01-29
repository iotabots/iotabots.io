import React from 'react'
import {
  CssBaseline,
  CustomThemeName,
  ThemeProvider as MuiThemeProvider
} from '@iotabots/components'
import { getItem, setItem } from '../utils/localStorage'

export interface ThemeProviderProps {
  children: JSX.Element
}

export type Mode = 'dark' | 'light'

export interface ModeContextProps {
  mode: Mode
  toggleMode?: () => void
}

export const ModeContext =
  React.createContext<ModeContextProps>({ mode: 'light' as Mode })

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props

  const [modeState, setModeState] = React.useState<Mode>('light' as Mode)
  const [themeState, setThemeState] =
    React.useState<CustomThemeName | undefined>('light')

  const getTheme = (mode: Mode): CustomThemeName | undefined => {
    if (mode === 'light') return 'light'
    return 'dark'
  }

  const toggleMode = (): void => {
    const newMode = modeState === 'light' ? 'dark' : 'light'
    setModeState(newMode as Mode)
    setItem('mode', newMode)
    setThemeState(getTheme(newMode as Mode))
  }

  React.useEffect(() => {
    const localMode = getItem('mode')
    if (localMode) {
      setModeState(localMode as Mode)
      setThemeState(getTheme(localMode as Mode))
    }
  }, [])

  return (
    <MuiThemeProvider
      theme={themeState}
    >
      <ModeContext.Provider
        value={{
          mode: modeState,
          toggleMode
        }}
      >
        <CssBaseline />
        {children}
      </ModeContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
