import { PropTypes } from "@material-ui/core"
import { createContext, ReactNode, useState } from "react"
import {v4 as uuidv4} from "uuid"

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
  addMovie: ()=>{},
  deleteMovie: ()=> {}
}

export const MovieContext = createContext<MovieContextValue>(movieDefault)
export default function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<Movie[]>(movieDefault.movies)

  const addMovie =(title: string) => setMovies([...movies, {id: uuid}]) 

  const contextValue = { theme, toggleMovie }

  return <MovieContext.Provider value={contextValue}>
    {children}
  </MovieContext.Provider>
}

