import React from 'react'
import { Gameboard, Gamepiece } from '../components';


export default function GameboardContainer( {children, ...restProps}) {
    return (        
        <Gameboard>
            <Gameboard.BackgroundLogo src="images/bg-triangle.svg" />

                <Gamepiece x={'150px'} y={'20px'} gamepiece={'PAPER'}>
                    <Gamepiece.Logo src="images/icon-paper.svg" alt="paper" />
                </Gamepiece>
                <Gamepiece x={'375px'} y={'20px'} gamepiece={'SCISSORS'}>
                    <Gamepiece.Logo src="images/icon-scissors.svg" alt="scissors"  />
                </Gamepiece>
                <Gamepiece x={'260px'} y={'210px'} gamepiece={'ROCK'}>
                    <Gamepiece.Logo src="images/icon-rock.svg" alt="rock"  />
                </Gamepiece>
            
            <Gameboard.BackgroundLogo 
                src="images/bg-pentagon.svg"
            />
        </Gameboard>
        
    )
}