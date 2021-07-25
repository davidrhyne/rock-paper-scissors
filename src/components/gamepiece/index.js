import React from 'react'
import { Container, Logo, OuterCircleAccent, OuterCircle, InnerCircleAccent, InnerCircle } from './styles/gamepiece'
import { COLOR_SCHEME } from '../../constants/constants'


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

