import React from 'react'
import { Container, Logo, ScoreContainer, ScoreLabel, ScoreText } from './styles/scoreboard'

export default function Scoreboard({children, ...restProps}) {  
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Scoreboard.Logo = function ScoreboardLogo({ children, ...restProps}) {
    return (
        <Logo {...restProps}>{children}</Logo>
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
