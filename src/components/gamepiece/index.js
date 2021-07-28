import React from 'react'
import { BackgroundLogo, Layout, Container, Logo, OuterCircleAccent, OuterCircle, InnerCircleAccent, InnerCircle } from './styles/gamepiece'
import { COLOR_SCHEME } from '../../constants/constants'
import { useGamepieceData, useIsLoading } from '../../context/GamepieceContext'
import { useGamemode } from '../../context/GamemodeContext'

export default function Gamepiece({gp, gamepiece, children, ...restProps}) {  
    
    function handleClick() {
        console.log('button got clicked = ', gamepiece)
    }
    
    // function getOuterColor(gamepiece) {
    //     console.log('get color gamepiece = ', gamepiece)
    //     console.log(COLOR_SCHEME.PAPER_ACCENT)
    //     return gamepiece === 'PAPER' ? COLOR_SCHEME.PAPER_ACCENT : 'yellow'
    // }

    // console.log('gp = ', gp )

    return (

            <Container {...restProps} gp={{gp}} onClick={handleClick}>{children}
                <Gamepiece.OuterCircleAccent gp={{gp}} >
                    <Gamepiece.OuterCircle gp={{gp}} >
                        <Gamepiece.InnerCircleAccent>
                            <Gamepiece.InnerCircle>
                                
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
    


    if (isLoading) {
        console.log('currenting loading data')
    } else {
        console.log('gamepieces = ', gamepieces)
        console.log('gamemode = ', gamemode)
        currentGamepieces = gamepieces.filter(gamepiece => gamepiece.game === gamemode)
        console.log('currentGamepieces = ', currentGamepieces)
    }


    return (
        <Layout gamemode={gamemode} {...restProps}>
            {/* <Gamepiece.BackgroundLogo src={'images/bg-triangle.svg  '}/> */}
                {console.log("layout loading")}
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

