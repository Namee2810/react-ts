import { createContext, ReactNode, useReducer } from "react"
import { authReducer, AuthState } from "reducers/AuthReducer"
import { AuthActionType } from "reducers/types"

interface AuthContextProps {
  children: ReactNode
}
interface AuthContextDefault {
  authInfo: AuthState
  toggleAuth: (user: string) => void
}

const authDefault = {
  isAuthenticated: false,
  user: "string"
}

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authDefault,
  toggleAuth: () => { }
})

export default function AuthProvider({ children }: AuthContextProps) {
  const [authInfo, dispatch] = useReducer(authReducer, authDefault)

  const toggleAuth = (user: string) => dispatch({
    type: AuthActionType.TOOGLE_AUTH,
    payload: user
  })

  const authContextValue = {
    authInfo,
    toggleAuth
  }

  return <AuthContext.Provider value={authContextValue}>
    {children}
  </AuthContext.Provider>
}
