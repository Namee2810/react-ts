import { AppBar, Box, Button, Chip, createStyles, FormControl, makeStyles, MenuItem, Select, Theme, Toolbar, Typography } from "@material-ui/core"
import { AuthContext } from "contexts/AuthContext"
import { ProgressContext } from "contexts/ProgressContext"
import { ThemeContext } from "contexts/ThemeContext"
import React, { useContext, useEffect, useState } from "react"
import Login from "./Login"
import WelcomeMessage from "./WelcomeMessage"

const useStyles = makeStyles((theme: Theme) => createStyles({
  positionSelect: {
    color: "#fff",
    borderBottom: "1px solid #fff"
  }
}))

export default function NavBar() {
  //styles
  const classes = useStyles()

  //context
  const { lastTime, status } = useContext(ProgressContext)
  const { theme } = useContext(ThemeContext)
  const { authInfo: { isAuthenticated }, toggleAuth } = useContext(AuthContext)

  //state
  const [position, setPosition] = useState("Full-stack Developer")
  const [time, setTime] = useState<Date>(() => new Date())
  const [loginOpen, setLoginOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)

    return () => clearInterval(timer)
  }, [])

  const handleChangeSelectPosition = (event: React.ChangeEvent<{
    value: unknown;
  }>) => setPosition(event.target.value as string)

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={1}
        >
          <Box>
            <Typography variant="h6">My movie</Typography>
            <Box>
              <Chip label={`Last updated: ${lastTime}- Status: ${status}`} />
            </Box>
          </Box>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Box>
              <FormControl>
                <Select
                  value={position}
                  onChange={handleChangeSelectPosition}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full-stack Developer">Full-stack Developer</MenuItem>
                  <MenuItem value="Front-end Developer">Frontend Developer</MenuItem>
                  <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">{time.toString()}</Typography>
            <Button
              variant="contained"
              onClick={isAuthenticated ? toggleAuth.bind(null, "") : setLoginOpen.bind(null, true)}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </Button>
          </Box>
          <Login
            open={loginOpen}
            onClose={setLoginOpen}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
