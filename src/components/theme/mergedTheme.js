// MUI Imports
import { deepmerge } from '@mui/utils'

// Core Theme Imports
import coreTheme from '@core/theme'

/**
 * Merges the user customizations with the core theme.
 * @param {Object} settings - The settings to use for the theme.
 * @param {string} mode - The theme mode, can be 'light' or 'dark'.
 * @param {string} direction - The direction for the layout, can be 'ltr' or 'rtl'.
 * @returns {Object} - The merged theme.
 */
const mergedTheme = (settings, mode, direction) => {
  // Vars for user theme overrides
  const userTheme = {
    // Customizations and overrides can be placed here.
    // For example, you can override typography, palette, etc.
    palette: {
      primary: {
        main: settings.primaryColor || '#1976d2', // Default primary color can be overridden
      },
      secondary: {
        main: settings.secondaryColor || '#dc004e', // Default secondary color
      },
    },
    typography: {
      fontFamily: settings.fontFamily || 'Arial, sans-serif', // Default font family
    },
  }

  // Merge core theme with user overrides
  return deepmerge(coreTheme(mode, direction), userTheme)
}

export default mergedTheme
