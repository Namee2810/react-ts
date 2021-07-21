import { createStyles, Fab, makeStyles, Theme } from "@material-ui/core"
import { ThemeContext } from "contexts/ThemeContext"
import React, { useContext } from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatButton: {
      position: "fixed",
      right: "10px",
      bottom: "10px",
    }
  })
)

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const classes = useStyles()

  return (
    <Fab color={theme} variant="extended" className={classes.floatButton}
      onClick={toggleTheme.bind(null, theme === "primary" ? "secondary" : "primary")}
    >
      Toggle theme
    </Fab>
  )
}
