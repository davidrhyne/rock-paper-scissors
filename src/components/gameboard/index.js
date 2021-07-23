import React from 'react'
import { Container, BackgroundLogo } from './styles/gameboard'

export default function Gameboard({children, ...restProps}) {  
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Gameboard.BackgroundLogo = function GameboardBackgroundLogo({ ...restProps}) {
    return (
        <BackgroundLogo {...restProps} />
    )
}
