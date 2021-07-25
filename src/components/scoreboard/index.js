import React from 'react'
import { Container, Logo, ScoreContainer, ScoreLabel, ScoreText } from './styles/scoreboard'
import { useGamemode, useGamemodeUpdate } from '../../context/GamemodeContext'

export default function Scoreboard({children, ...restProps}) {  
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Scoreboard.Logo = function ScoreboardLogo({ children, ...restProps}) {
    
    const gamemode = useGamemode()
    const updateGameMode = useGamemodeUpdate()

    //console.log('game mode = ', gamemode)
    
    function handleLogoClick() {
        const newGamemode = gamemode === 'classic' ? 'bonus' : 'classic'
        updateGameMode(newGamemode)
    }
    return (
        <Logo {...restProps} onClick={handleLogoClick}>{children}</Logo>
    )
}

Scoreboard.ScoreContainer = function ScoreboardScoreContainer({ children, ...restProps}) {
    return (
        <ScoreContainer {...restProps}>{children}</ScoreContainer>
    )
}

Scoreboard.ScoreLabel = function ScoreboardScoreLabel({ children, ...restProps}) {
    return (
        <ScoreLabel {...restProps}>{children}</ScoreLabel>
    )
}

Scoreboard.ScoreText = function ScoreboardScoreText({ children, ...restProps}) {
    return (
        <ScoreText {...restProps}>{children}</ScoreText>
    )
}
