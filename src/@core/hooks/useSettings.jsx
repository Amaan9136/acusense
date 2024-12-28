// React Imports
import { useContext } from 'react'

// Context Imports
import { SettingsContext } from '@core/contexts/settingsContext'

export const useSettings = () => {
  // Get the context value
  const context = useContext(SettingsContext)

  // Throw an error if context is not found (indicating useSettings was not wrapped in SettingsProvider)
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

  return context
}
