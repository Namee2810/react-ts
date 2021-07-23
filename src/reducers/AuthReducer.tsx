import { AuthActionType } from "./types"

const { TOGGLE_AUTH } = AuthActionType

export interface AuthState {
  isAuthenticated: boolean
  user: string
}

export interface AuthAction {
  type: AuthActionType
  payload: string
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        user: action.payload
      }
    default: return state
  }
}