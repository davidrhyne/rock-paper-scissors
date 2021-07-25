import styled from 'styled-components';
import { COLOR_SCHEME, FONT_FAMILY, FONT_WEIGHT, BREAKPOINT, FONT_SIZE } from '../../../constants/constants'

export const Container = styled.div`
    border: 1px solid magenta;
    display: flex;
    flex-direction: column;

    position: relative;
    margin: 4em 0;
`

export const BackgroundLogo = styled.img`
    width: 60%;
    height: auto;

    padding: 4em;
    border: 1px solid dodgerblue;
    margin: 0 auto;
    
`