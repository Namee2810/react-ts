import ToggleThemeButton from "components/ToggleThemeButton"
import ThemeProvider from "contexts/ThemeContext"
import NavBar from "./components/NavBar"
import ProgressProvider from "./contexts/ProgressContext"

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <NavBar />
        <ToggleThemeButton />
      </ProgressProvider>
    </ThemeProvider>
  )
}
