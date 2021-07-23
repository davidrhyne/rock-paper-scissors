import React from 'react'
import { Scoreboard } from '../components';
//import { ScoreContainer, ScoreLabel, ScoreText } from '../components/scoreboard/styles/scoreboard';


export default function ScoreboardContainer( {children, ...restProps}) {
    return (        
        <Scoreboard>
            
            
            <Scoreboard.Logo src="images/logo.svg" />
            <Scoreboard.ScoreContainer>
                <Scoreboard.ScoreLabel>
                    Score
                </Scoreboard.ScoreLabel>
                <Scoreboard.ScoreText>
                    12
                </Scoreboard.ScoreText>
            </Scoreboard.ScoreContainer>
        </Scoreboard>
    )
}