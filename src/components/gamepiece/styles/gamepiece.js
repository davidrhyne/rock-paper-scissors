import styled from 'styled-components';
import { COLOR_SCHEME, FONT_FAMILY, FONT_WEIGHT, BREAKPOINT, FONT_SIZE } from '../../../constants/constants'

export const Container = styled.div`
    position: relative;
    position: absolute;
    /* left: 150px;
    top: 25px; */
    left: ${props => props.x};
    top: ${props => props.y};
`

export const OuterCircleAccent = styled.div`
    width: 130px;
    height: 133px;
    border-radius: 50%;
    background: ${props => props.OuterColor};
`
export const OuterCircle = styled.div`
    width: 130px;
    height: 126px;
    border-radius: 50%;
    background: linear-gradient(
        ${COLOR_SCHEME.PAPER_START}, 
        ${COLOR_SCHEME.PAPER_END});
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

