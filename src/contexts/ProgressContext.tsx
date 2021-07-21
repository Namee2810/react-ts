import { createContext, ReactNode } from "react"

interface ProgressProviderProps {
  children: ReactNode
}
interface ProgressContextDefault {
  lastTime: string,
  status: string
}

const progressDefaultData = {
  lastTime: "20/07/2021",
  status: "In progress"
}
export const ProgressContext = createContext<ProgressContextDefault>(progressDefaultData)

export default function ProgressProvider({ children }: ProgressProviderProps) {
  return <ProgressContext.Provider value={progressDefaultData}>
    {children}
  </ProgressContext.Provider>
}