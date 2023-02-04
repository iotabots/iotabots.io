import React from 'react'
import {
  CssBaseline,
  CustomThemeName,
  ThemeProvider as MuiThemeProvider
} from '@ccdao/components'

export interface ThemeProviderProps {
  children: JSX.Element
}

export type Mode = 'dark' | 'light'

export interface ModeContextProps {
  mode: Mode
  toggleMode?: () => void
}

export const ModeContext =
  React.createContext<ModeContextProps>({ mode: 'dark' as Mode })

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props

  const [modeState] = React.useState<Mode>('dark' as Mode)
  const [themeState] =
    React.useState<CustomThemeName | undefined>('dark')


  return (
    <MuiThemeProvider
      theme={themeState}
    >
      <ModeContext.Provider
        value={{
          mode: modeState,
        }}
      >
        <CssBaseline />
        {children}
      </ModeContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
