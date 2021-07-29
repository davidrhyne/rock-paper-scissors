import React, { useEffect } from 'react'
import { BackgroundLogo, Layout, Container, Logo, OuterCircleAccent, OuterCircle, InnerCircleAccent, InnerCircle } from './styles/gamepiece'
import { COLOR_SCHEME } from '../../constants/constants'
import { useGamepieceData, useIsLoading } from '../../context/GamepieceContext'
import { useGamemode, useGamemodeUpdate } from '../../context/GamemodeContext'
import { useUserChoice, useUserChoiceUpdate } from '../../context/UserChoiceContext'
import { useGameRunning, useGameRunningUpdate } from '../../context/GameRunningContext'
import { useComputerChoice, useComputerChoiceUpdate } from '../../context/ComputerChoiceContext'


export default function Gamepiece({gp, gamepiece, children, ...restProps}) {  
    
    const updateUserChoice = useUserChoiceUpdate()
    const updateGamemode = useGamemodeUpdate()
    const userChoice = useUserChoice()
    const computerChoice = useComputerChoice()
    const updateComputerChoice = useComputerChoiceUpdate()

        // const userChoice = useUserChoice()
    const gamemode = useGamemode()

    const updateIsGameRunning = useGameRunningUpdate();

    function handleClick() {
        console.log('button got clicked = ', gamepiece)
        updateUserChoice(gamepiece)
        //updateGamemode(prevValue => `%{prevValue}-running`)
        updateIsGameRunning(true)
    }
    
    // load the Gamepiece data from supplied data.json file
    useEffect(() => {
        console.log('useeffect got triggered')
        const choices = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK']
        
        const random = gamemode === 'classic' ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 5)
        console.log('gamemode === ', gamemode, ' random === ', random)
        updateComputerChoice(choices[random])
    }, [userChoice])

    console.log('users choice = ', userChoice)
    console.log('ComputerChoice = ', computerChoice )

    return (

            <Container {...restProps} gp={{gp}} onClick={handleClick}>{children}
                <Gamepiece.OuterCircleAccent gp={{gp}} >
                    <Gamepiece.OuterCircle gp={{gp}} >
                        <Gamepiece.InnerCircleAccent gp={{gp}}>
                            <Gamepiece.InnerCircle gp={{gp}}>
                                
                            </Gamepiece.InnerCircle>
                        </Gamepiece.InnerCircleAccent>
                    </Gamepiece.OuterCircle>
                </Gamepiece.OuterCircleAccent>        
            </Container>

    )
}

Gamepiece.Layout = function GamepieceLayout({children, ...restProps}) {

    const isLoading = useIsLoading();
    const gamepieces = useGamepieceData();
    let currentGamepieces = []
    const gamemode = useGamemode()
    const userChoice = useUserChoice()
    const isGameRunning = useGameRunning()
    const computerChoice = useComputerChoice()


    if (isLoading) {
        console.log('currenting loading data')
    } else {
        console.log('gamepieces = ', gamepieces)
        console.log('gamemode = ', gamemode)
        if ( userChoice ) {
            currentGamepieces = gamepieces.filter(gamepiece => gamepiece.name === userChoice || gamepiece.name === "DUMMY")
        } else {
            currentGamepieces = gamepieces.filter(gamepiece => gamepiece.game === gamemode && gamepiece.name !== "DUMMY"  )
        }
        
        console.log('currentGamepieces = ', currentGamepieces)
    }

    console.log('isGameRunning = ', isGameRunning, ' ComputerChoice = ', computerChoice )

    return (
        <Layout isGameRunning={isGameRunning} computerChoice={computerChoice} userChoice={userChoice} gamemode={gamemode} {...restProps}>
        {/* <Gamepiece.BackgroundLogo src={'images/bg-triangle.svg  '}/> */}
            {console.log("layout loading")}
                    { isLoading ? 
                <div>game data is loading... your patience is appreciated</div> :
                <>
                    {currentGamepieces.map(gamepiece => {
                        console.log('loading gamepiece = ', gamepiece)
                        return (
                            <Gamepiece key={gamepiece.name}  gp={gamepiece} gamepiece={gamepiece.name} >
                                {gamepiece.name !== 'DUMMY' ? <Gamepiece.Logo src={`images/icon-${gamepiece.name}.svg` } alt={gamepiece.name} /> : null }
                                
                            </Gamepiece>
                        )
                    })
                    }
                </>
            }
            {children}
        </Layout>

    )
}

Gamepiece.BackgroundLogo = function GamepieceBackgroundLogo({ ...restProps}) {
    return (
        <BackgroundLogo {...restProps} />
    )
}

Gamepiece.Logo = function GamepieceLogo({ ...restProps}) {
    return (
        <Logo {...restProps} />
    )
}

Gamepiece.OuterCircleAccent = function GamepieceInnerCircle({ children, ...restProps}) {
    return (
        <OuterCircleAccent {...restProps}>{children}</OuterCircleAccent>
    )
}

Gamepiece.OuterCircle = function GamepieceInnerCircle({ children, ...restProps}) {
    return (
        <OuterCircle {...restProps}>{children}</OuterCircle>
    )
}

Gamepiece.InnerCircleAccent = function GamepieceInnerCircle({ children, ...restProps}) {
    return (
        <InnerCircleAccent {...restProps}>{children}</InnerCircleAccent>
    )
}

Gamepiece.InnerCircle = function GamepieceInnerCircle({ children, ...restProps}) {
    return (
        <InnerCircle {...restProps}>{children}</InnerCircle>
    )
}

