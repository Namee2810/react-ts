import { AppBar, Box, Button, createStyles, FormControl, makeStyles, MenuItem, Select, Theme, Toolbar, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
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

  //state
  const [position, setPosition] = useState("Full-stack Developer")
  const [time, setTime] = useState<Date>(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)

    return () => clearInterval(timer)
  }, [])

  const handleChangeSelectPosition = (event: React.ChangeEvent<{
    value: unknown;
  }>) => setPosition(event.target.value as string)

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
        >
          <Typography variant="h6">My movie</Typography>
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
          <Box textAlign="center" py={1}>
            <Typography variant="h6">{time.toString()}</Typography>
            <Button variant="contained">Login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
