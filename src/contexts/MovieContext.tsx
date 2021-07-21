import { createContext, ReactNode, useState } from "react"
import { v4 } from "uuid"

interface Movie {
  id: string
  title: string
}
interface MovieProviderProps {
  children: ReactNode
}
interface MovieContextValue {
  movies: Movie[]
  addMovie: (title: string) => void
  deleteMovie: (id: string) => void
}

const movieDefault = {
  movies: [],
  addMovie: () => { },
  deleteMovie: () => { }
}

export const MovieContext = createContext<MovieContextValue>(movieDefault)
export default function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<Movie[]>(movieDefault.movies)

  const addMovie = (title: string) => setMovies([...movies, { id: v4(), title }])
  const deleteMovie = (id: string) => {
    const idx = movies.findIndex(movie => movie.id === id)
    const newMovies = [...movies].splice(idx, 1)
    setMovies(newMovies)
  }

  const contextValue = { movies, addMovie, deleteMovie }

  return <MovieContext.Provider value={contextValue}>
    {children}
  </MovieContext.Provider>
}

