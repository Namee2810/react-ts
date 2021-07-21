import { AuthActionType } from "./types"

export interface AuthState {
  isAuthenticated: boolean
  user: string
}

export interface AuthAction {
  type: AuthActionType
  payload: string
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  return state
}