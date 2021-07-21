import { PropTypes } from "@material-ui/core"
import { createContext, ReactNode, useState } from "react"

interface ThemeProviderProps {
  children: ReactNode
}
interface ThemeContextValue {
  theme: PropTypes.Color
  toggleTheme: (theme: PropTypes.Color) => void
}

const themeDefault = {
  theme: "primary" as PropTypes.Color,
  toggleTheme: () => { }
}

export const ThemeContext = createContext<ThemeContextValue>(themeDefault)
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(themeDefault.theme)

  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme)

  const contextValue = { theme, toggleTheme }

  return <ThemeContext.Provider value={contextValue}>
    {children}
  </ThemeContext.Provider>
}

