import React from 'react'
import { Gameboard, Gamepiece } from '../components';
import { useGamepieceData, useIsLoading } from '../context/GamepieceContext' 
import { useGamemode } from '../context/GamemodeContext'

export default function GameboardContainer( {children, ...restProps}) {
    const isLoading = useIsLoading();
    const gamepieces = useGamepieceData();
    let currentGamepieces = []
    const gamemode = useGamemode()



    if (isLoading) {
        console.log('currenting loading data')
    } else {
        console.log('gamepieces = ', gamepieces)
        console.log('gamemode = ', gamemode)
        currentGamepieces = gamepieces.filter(gamepiece => gamepiece.game === gamemode)
        console.log('currentGamepieces = ', currentGamepieces)
    }


    return (        
        <Gameboard>
            <Gameboard.BackgroundLogo src="images/bg-triangle.svg" />

                {/* <Gamepiece x={'150px'} y={'20px'} gamepiece={'PAPER'}>
                    <Gamepiece.Logo src="images/icon-paper.svg" alt="paper" />
                </Gamepiece>
                <Gamepiece x={'375px'} y={'20px'} gamepiece={'SCISSORS'}>
                    <Gamepiece.Logo src="images/icon-scissors.svg" alt="scissors"  />
                </Gamepiece>
                <Gamepiece x={'260px'} y={'210px'} gamepiece={'ROCK'}>
                    <Gamepiece.Logo src="images/icon-rock.svg" alt="rock"  />
                </Gamepiece> */}
            
                { isLoading ? 
                    <div>game data is loading... your patience is appreciated</div> :
                    <>
                        {currentGamepieces.map(gamepiece => {
                            console.log('loading gamepiece = ', gamepiece)
                            return (
                                <Gamepiece key={gamepiece.name}  gp={gamepiece} gamepiece={gamepiece.name} >
                                
                                    <Gamepiece.Logo src={`images/icon-${gamepiece.name}.svg` } alt={gamepiece.name} />
                                </Gamepiece>
                            )
                        })
                        
                        
                        
                        
                        
                        }
                    </>
                }

            <Gameboard.BackgroundLogo 
                src="images/bg-pentagon.svg"
            />
        </Gameboard>
        
    )
}