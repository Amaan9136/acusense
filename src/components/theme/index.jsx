'use client'

// React Imports
import { useMemo } from 'react'

// MUI Imports
import { deepmerge } from '@mui/utils'

import CssBaseline from '@mui/material/CssBaseline'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  darken,
  experimental_extendTheme as extendTheme,
  lighten
} from '@mui/material/styles'

// Component Imports
import ModeChanger from './ModeChanger'

// Config Imports
import primaryColorConfig from '@configs/primaryColorConfig'
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Core Theme Imports
import defaultCoreTheme from '@core/theme'

const ThemeProvider = (props) => {
  // Props
  const { children, direction } = props

  // Hooks
  const { settings, updateSettings } = useSettings()

  // Merge the primary color scheme override with the core theme
  const theme = useMemo(() => {
    const newColorScheme = {
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: primaryColorConfig[0].main,
              light: lighten(primaryColorConfig[0].main, 0.2),
              dark: darken(primaryColorConfig[0].main, 0.1)
            },
            background: {
              default: '#ffffff',
              paper: '#f5f5f5',
            },
          },
        },
        dark: {
          palette: {
            primary: {
              main: primaryColorConfig[0].main,
              light: lighten(primaryColorConfig[0].main, 0.2),
              dark: darken(primaryColorConfig[0].main, 0.1)
            },
            background: {
              default: '#121212',
              paper: '#1f1f1f',
            },
          },
        },
      },
    }

    const coreTheme = deepmerge(defaultCoreTheme(settings.mode || 'light', direction), newColorScheme)

    return extendTheme(coreTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.mode, direction])

  const handleModeToggle = () => {
    // Toggle between light and dark mode
    updateSettings({ mode: settings.mode === 'light' ? 'dark' : 'light' })

  }

  return (
    <CssVarsProvider
      theme={theme}
      defaultMode={settings.mode || 'light'} // Ensure a default mode is set [CHANGE THEME]
      modeStorageKey={`${themeConfig.templateName.toLowerCase().split(' ').join('-')}-mui-template-mode`}
    >
      <>
        <ModeChanger onToggle={handleModeToggle} />
        <CssBaseline />
        {children}
      </>
    </CssVarsProvider>
  )
}

export default ThemeProvider
