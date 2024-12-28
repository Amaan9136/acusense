'use client'

// React Imports
import { useEffect } from 'react'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Config Imports
import themeConfig from '@configs/themeConfig'

const ModeChanger = () => {
  // Hooks
  const { settings } = useSettings()

  useEffect(() => {
    // Set the theme mode based on either the cookie or the default config
    const mode = settings.mode || themeConfig.mode

    // Toggle dark or light mode class on the <html> element
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }

    // Optionally, you can store the selected mode in localStorage or cookies if you want to persist it across sessions
    localStorage.setItem('theme-mode', mode)

  }, [settings.mode])  // This will run every time the mode changes

  return null
}

export default ModeChanger
