import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Primero, intenta obtener el tema del localStorage
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      return localTheme
    }

    // Si no hay tema en localStorage, verifica las preferencias del sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
    // Guarda el tema actual en localStorage
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleChangeMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{
      handleChangeMode,
      theme
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
export default ThemeContext
