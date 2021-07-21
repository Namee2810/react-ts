import { Box, Button, Chip, createStyles, makeStyles, PropTypes, TextField, Theme } from '@material-ui/core'
import { MovieContext } from 'contexts/MovieContext'
import { ThemeContext } from 'contexts/ThemeContext'
import React, { ChangeEvent, useContext, useState } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: "5px"
    }
  })
)

export default function Movies() {
  const { theme } = useContext(ThemeContext)
  const { movies, addMovie, deleteMovie } = useContext(MovieContext)

  const classes = useStyles()
  const [movie, setMovie] = useState("")

  const handleMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => setMovie(event.target.value)

  return (
    <>
      <Box display="flex" justifyContent="center" my={3}>
        <TextField
          label="Your favorite movie"
          variant="outlined"
          className={classes.movieInput}
          value={movie}
          onChange={handleMovieInputChange}
          size="small"
          color={theme as "primary" | "secondary"}
        />
        <Button
          variant="contained"
          color={theme}
          onClick={() => {
            addMovie(movie)
            setMovie("")
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map(movie => (
          <Box mx={1}>
            <Chip
              key={movie.id}
              label={movie.title}
              clickable
              color={theme as Exclude<PropTypes.Color, 'inherit'>}
              onDelete={deleteMovie.bind(null, movie.id)}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}
