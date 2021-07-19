import { Box } from "@material-ui/core";

interface WelcomeMessageProps {
  position: string
  country?: string
}

export default function WelcomeMessage({
  position,
  country = "Vietnam"
}: WelcomeMessageProps) {
  return (
    <Box>
      Welomce {position} from <b>{country}</b>
    </Box>
  )
}
