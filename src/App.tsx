import ToggleThemeButton from "components/ToggleThemeButton"
import MovieProvider from "contexts/MovieContext"
import ThemeProvider from "contexts/ThemeContext"
import NavBar from "./components/NavBar"
import ProgressProvider from "./contexts/ProgressContext"

export default function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <ProgressProvider>
          <NavBar />
          <ToggleThemeButton />
        </ProgressProvider>
      </MovieProvider>
    </ThemeProvider>
  )
}
