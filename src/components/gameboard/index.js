import React, {useRef} from 'react'
import { Container, BackgroundLogo } from './styles/gameboard'

export default function Gameboard({children, ...restProps}) {  
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Gameboard.BackgroundLogo = function GameboardBackgroundLogo({ ...restProps}) {
    const logoRef = useRef(null)
    return (
        <BackgroundLogo ref={logoRef} {...restProps} />
    )
}