import {createContext, useContext, useReducer} from "react";

const DEFAULT_USER_STATE = {
    isAuthenticated: false,
    token: undefined,
    profile: undefined,
}

const ProfileContext = createContext(DEFAULT_USER_STATE)

function reducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                token: action.token
            }
        case 'PROFILE':
            return {
                ...state,
                profile: action.profile,
            }
        case 'LOGOUT':
            return DEFAULT_USER_STATE
        default:
            return state
    }
}

function ProfileProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, DEFAULT_USER_STATE)

    return (
        <ProfileContext.Provider value={{state, dispatch}}>
            {children}
        </ProfileContext.Provider>
    )
}

export { ProfileProvider, ProfileContext }