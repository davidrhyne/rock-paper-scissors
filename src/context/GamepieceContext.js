import React, {useState, useContext, createContext, useEffect } from 'react'
import data from '../data/data.json'

const GamepieceContext = createContext()
const IsLoadingContext = createContext()

// custom hook to access data
export function useGamepieceData() {
    return useContext(GamepieceContext)
}

export function useIsLoading() {
    return useContext(IsLoadingContext)
}

export function GamepieceContextProvider({children}) {

    const [ gamepieceData, setGamepieceData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    
    // load the Gamepiece data from supplied data.json file
    useEffect(() => {
        setGamepieceData(data)
        setIsLoading(false)
      }, [])
    
    return (
        <GamepieceContext.Provider value={gamepieceData}>
            <IsLoadingContext.Provider value={isLoading}>
                {children}
            </IsLoadingContext.Provider>            
        </GamepieceContext.Provider>
    )
}