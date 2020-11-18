import React , {useState, createContext} from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useState("Tariq")
    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
