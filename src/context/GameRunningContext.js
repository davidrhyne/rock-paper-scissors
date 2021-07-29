import React, {useState, useContext, createContext } from 'react'

const GameRunningContext = createContext()
const GameRunningUpdateContext = createContext()

//  hook to provide access to the current GameRunning
export function useGameRunning() {
    return useContext(GameRunningContext)
}

// hook to provide access to updating the current GameRunning value
export function useGameRunningUpdate() {
    return useContext(GameRunningUpdateContext)
}

export function GameRunningContextProvider({children}) {

    const [isGameRunning, setIsGameRunning] = useState(false)

    function updateGameRunning(newValue) {
        setIsGameRunning(newValue)
    }

    return (
        <GameRunningContext.Provider value={isGameRunning}>
            <GameRunningUpdateContext.Provider value={updateGameRunning}>
                {children}
            </GameRunningUpdateContext.Provider>
        </GameRunningContext.Provider>
    )
}