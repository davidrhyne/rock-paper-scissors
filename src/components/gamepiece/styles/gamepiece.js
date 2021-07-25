import styled from 'styled-components';
import { COLOR_SCHEME, BREAKPOINT } from '../../../constants/constants'

export const Container = styled.div`
    position: relative;
    position: absolute;
    /* left: 150px;
    top: 25px; */
    left: ${props => props.gp.gp.x };
    top: ${props => props.gp.gp.y};
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
    left: 40px;
    top: 45px;
    z-index: 9;

`

