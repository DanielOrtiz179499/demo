import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core'
import React from 'react'

type ThemeProp = {
  children: JSX.Element
}

export enum themePalette {
  BG = '#12181b',
  LIME = '#C8FA5F',
  FONT_GLOBAL = "'JetBrains Mono', monospace",
}

const theme = createTheme({
  palette: {
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  )
}
