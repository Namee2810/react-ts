import { Box } from "@material-ui/core";
import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";

interface WelcomeMessageProps {
  position: string
  country?: string
}

export default function WelcomeMessage({
  position,
  country = "Vietnam"
}: WelcomeMessageProps) {
  const { authInfo } = useContext(AuthContext)
  return (
    <Box>
      Welcome {authInfo.user ?? "0"} {position} from <b>{country}</b>
    </Box>
  )
}
