import React, {useState, useContext, createContext } from 'react'

const UserChoiceContext = createContext()
const UserChoiceUpdateContext = createContext()

//  hook to provide access to the current UserChoice
export function useUserChoice() {
    return useContext(UserChoiceContext)
}

// hook to provide access to updating the current UserChoice value
export function useUserChoiceUpdate() {
    return useContext(UserChoiceUpdateContext)
}

export function UserChoiceContextProvider({children}) {

    const [userChoice, setUserChoice] = useState(null)

    function updateUserChoice(newValue) {
        setUserChoice(newValue)
    }

    return (
        <UserChoiceContext.Provider value={userChoice}>
            <UserChoiceUpdateContext.Provider value={updateUserChoice}>
                {children}
            </UserChoiceUpdateContext.Provider>
        </UserChoiceContext.Provider>
    )
}