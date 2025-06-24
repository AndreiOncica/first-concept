import styled, { createGlobalStyle } from 'styled-components'


export const colors = {
    white: '#f4f4f4',
    black: '#3C4443',
    accent: 'rgb(179, 188, 187)'
}

export const font = {
    family: 'Encode Sans Expanded',
    size: {

    },
    weight: {

    }
}

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${font.family};
    }   

    ul {
        list-style: none;
        padding: 0;
    }
`;

export const Container = styled.div`
    width: 80%;
    max-width: 1175px;
    margin: 0 auto;
    display: ${({display}) => display || 'block'};
    align-items: ${({align}) => align || 'center'};
    justify-content: ${({justify}) => justify || 'center'};
    background-color: ${({background}) => background};
    gap: ${({gap}) => gap};
    z-index: ${({zIndex}) => zIndex};
`;