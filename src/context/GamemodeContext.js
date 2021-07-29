import React, {useState, useContext, createContext } from 'react'

const GamemodeContext = createContext()
const GamemodeUpdateContext = createContext()

//  hook to provide access to the current gamemode
export function useGamemode() {
    return useContext(GamemodeContext)
}

// hook to provide access to updating the current gamemode value
export function useGamemodeUpdate() {
    return useContext(GamemodeUpdateContext)
}

export function GamemodeContextProvider({children}) {

    const [gamemode, setGamemode] = useState('classic')

    function updateGamemode(newValue) {
        setGamemode(newValue)
    }

    return (
        <GamemodeContext.Provider value={gamemode}>
            <GamemodeUpdateContext.Provider value={updateGamemode}>
                {children}
            </GamemodeUpdateContext.Provider>
        </GamemodeContext.Provider>
    )
}