import styled from 'styled-components';
import { COLOR_SCHEME, FONT_FAMILY, FONT_WEIGHT, BREAKPOINT, FONT_SIZE } from '../../../constants/constants'

export const Container = styled.div`
    border: 2px solid ${COLOR_SCHEME.SECONDARY};
    border-radius: 8px;
    width: 75%;
    margin: 0 auto;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    
`
export const Logo = styled.img`
    width: 26%;
    height: auto;
`

export const ScoreContainer = styled.div`
    background-color: ${COLOR_SCHEME.BG_LIGHT};
    text-align: center;
    border-radius: 8px;
`

export const ScoreLabel = styled.div`

    color: ${COLOR_SCHEME.PAPER_ACCENT};
    font-size: ${FONT_SIZE.SCORE_LABEL_MOBILE};
    padding: 1em 2em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    
`

export const ScoreText = styled.div`
    color: ${COLOR_SCHEME.SECONDARY};
    font-size: ${FONT_SIZE.SCORE_MOBILE};
    font-weight: ${FONT_WEIGHT.BOLD};
`