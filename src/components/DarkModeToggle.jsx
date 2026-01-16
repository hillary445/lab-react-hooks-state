import React, { useState } from 'react'

const DarkModeToggle = ({theme, setTheme}) => {
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode{} </button>
  )
}

export default DarkModeToggle
