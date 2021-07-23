import { Button, Dialog, DialogActions, DialogContent, TextField } from "@material-ui/core"
import { AuthContext } from "contexts/AuthContext"
import React, { ChangeEvent, useContext, useState } from "react"

interface LoginProps {
  open: boolean,
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ open, onClose }: LoginProps) {
  const [user, setUser] = useState("")
  const { toggleAuth } = useContext(AuthContext)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setUser(event.target.value)
  const handleSubmit = () => {
    toggleAuth(user)
    setUser("")
    onClose(false)
  }

  return (
    <Dialog open={open} onClose={onClose.bind(null, false)}>
      <DialogContent>
        <TextField
          label="User"
          onChange={handleChange}
          value={user}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          disabled={!user}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  )
}
