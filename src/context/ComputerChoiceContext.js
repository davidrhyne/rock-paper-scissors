import React, {useState, useContext, createContext, useEffect } from 'react'
import { useUserChoice } from './UserChoiceContext'
import { useGamemode } from './GamemodeContext'

const ComputerChoiceContext = createContext()
const ComputerChoiceUpdateContext = createContext()

//  hook to provide access to the current ComputerChoice
export function useComputerChoice() {
    return useContext(ComputerChoiceContext)
}

// hook to provide access to updating the current ComputerChoice value
export function useComputerChoiceUpdate() {
    return useContext(ComputerChoiceUpdateContext)
}

export function ComputerChoiceContextProvider({children}) {

    const [computerChoice, setComputerChoice] = useState(null)
    // const userChoice = useUserChoice()
    // const gamemode = useGamemode()

    function updateComputerChoice(newValue) {
        setComputerChoice(newValue)
    }



    return (
        <ComputerChoiceContext.Provider value={computerChoice}>
            <ComputerChoiceUpdateContext.Provider value={updateComputerChoice}>
                {children}
            </ComputerChoiceUpdateContext.Provider>
        </ComputerChoiceContext.Provider>
    )
}