import styled from 'styled-components';
import { COLOR_SCHEME, BREAKPOINT } from '../../../constants/constants'


export const Layout = styled.div`
    /* position: relative; */
    border: 1px yellow solid;
    margin: 0 auto;
    /* height: 320px;
    width: 320px; */
    
    /* min-width: fit-content;
    max-height: fit-content; */
    
    background-image: ${props => props.gamemode === 'classic' ? 
        "url('images/bg-triangle.svg')"  : 
        "url('images/bg-pentagon.svg')" }; 
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position-y: 50%;
    background-position-x: 50%; 

    /* @media (min-width: 500px) {
        height: 40vh;
        width: 70vw;
    } */

    padding: 2em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 50px 1fr;
    grid-template-areas: 
        "paper paper . scissors scissors "
        ". . . . ."
        ". rock rock rock ."      
    ;
    
`

export const BackgroundLogo = styled.img`
    /* display: block;
    border: 1px solid limegreen;
    width: 70%;
    height: auto;
    padding: 3em;
    margin: 0 auto; */
`

export const Container = styled.div`
    position: relative;
    /* position: absolute;
    left: ${props => props.gp.gp.x};
    top: ${props => props.gp.gp.y}; */

    /* left: 150px;
    top: 25px; */
    /* left: ${props => `calc(${props.gp.gp.x} - 133px)`}; */
    /* left: 10px;
    top: 20px; */
    margin: 0 auto;

    ${props => props.gp.gp.name === 'ROCK' && `
        /* border: 1px red solid; */
        grid-area: rock;
    `} 

    ${props => props.gp.gp.name === 'PAPER' && `
        /* border: 1px blue solid; */
        grid-area: paper;
    `} 

    ${props => props.gp.gp.name === 'SCISSORS' && `
        /* border: 1px yellow solid; */
        grid-area: scissors;
    `} 

    &:hover {
        /* border: 4px limegreen solid; */
        box-shadow: 0 0px 0px 20px rgba(255, 255, 255, 0.08    );
        border-radius: 50%;
        /* border-style: inset; */
    }   

`

export const OuterCircleAccent = styled.div`
    width: 130px;
    height: 133px;
    border-radius: 50%;
    background: ${props => props.gp.gp.piece_accent };
`
export const OuterCircle = styled.div`
    width: 130px;
    height: 126px;
    border-radius: 50%;
    background: ${ props => `linear-gradient(
        ${props.gp.gp.piece_start}, 
        ${props.gp.gp.piece_end})`};
    display: flex;
    justify-content: center;
`

export const InnerCircleAccent = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${COLOR_SCHEME.PLAYER_PIECE_BG_ACCENT}; 
    margin-top: 15px;
`

export const InnerCircle = styled.div`
    width: 99px;
    height: 95px;
    border-radius: 50%;
    background: ${COLOR_SCHEME.PLAYER_PIECE_BG};
    margin-top: 5px;
    
`

export const Logo = styled.img`
    width: 50px;
    height: auto;
    position: absolute;
    left: 38px;
    top: 38px;
    z-index: 9;
    /* border: 1px solid red; */
`

