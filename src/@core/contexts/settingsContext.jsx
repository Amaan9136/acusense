'use client'
import { createContext, useMemo, useState } from 'react'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useObjectCookie } from '@core/hooks/useObjectCookie'

// Initial Settings Context
export const SettingsContext = createContext(null)

// Settings Provider
export const SettingsProvider = props => {
  // Initial Settings
  const initialSettings = {
    mode: themeConfig.mode || 'light' // Ensure a default mode
  }

  const updatedInitialSettings = {
    ...initialSettings,
    mode: props.mode || themeConfig.mode
  }

  const [settingsCookie, updateSettingsCookie] = useObjectCookie(
    themeConfig.settingsCookieName,
    JSON.stringify(props.settingsCookie) !== '{}' ? props.settingsCookie : updatedInitialSettings
  )

  const [_settingsState, _updateSettingsState] = useState(
    JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : updatedInitialSettings
  )

  const updateSettings = (settings, options) => {
    const { updateCookie = true } = options || {}

    _updateSettingsState(prev => {
      const newSettings = { ...prev, ...settings }

      if (updateCookie) updateSettingsCookie(newSettings)

      return newSettings
    })
  }

  return (
    <SettingsContext.Provider
      value={{
        settings: _settingsState,
        updateSettings
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  )
}
