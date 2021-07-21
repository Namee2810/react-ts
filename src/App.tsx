import Movies from "components/Movies"
import ToggleThemeButton from "components/ToggleThemeButton"
import AuthProvider from "contexts/AuthContext"
import MovieProvider from "contexts/MovieContext"
import ThemeProvider from "contexts/ThemeContext"
import NavBar from "./components/NavBar"
import ProgressProvider from "./contexts/ProgressContext"

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MovieProvider>
          <ProgressProvider>
            <NavBar />
            <Movies />
            <ToggleThemeButton />
          </ProgressProvider>
        </MovieProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
