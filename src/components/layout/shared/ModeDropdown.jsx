'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const ModeDropdown = () => {
  // States
  const [tooltipOpen, setTooltipOpen] = useState(false)

  // Hooks
  const { settings, updateSettings } = useSettings()

  const handleToggle = () => {
    if (settings.mode === 'dark') {
      updateSettings({ mode: 'light' })
    } else {
      updateSettings({ mode: 'dark' })
    }
  }

  const getModeIcon = () => {
    return settings.mode === 'dark' ? 'ri-moon-clear-line' : 'ri-sun-line'
  }

  return (
    <>
      <Tooltip
        title={`${settings.mode} Mode`}
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={tooltipOpen}
        PopperProps={{ className: 'capitalize' }}
      >
        <IconButton onClick={handleToggle} className='text-textPrimary'>
          <i className={getModeIcon()} />
        </IconButton>
      </Tooltip>
    </>
  )
}

export default ModeDropdown
