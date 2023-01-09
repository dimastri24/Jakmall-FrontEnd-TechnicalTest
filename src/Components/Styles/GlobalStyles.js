import styled, { createGlobalStyle } from 'styled-components';

import '../../index.css';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Helvetica', sans-serif;
    }
`;

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--color-cream);
    /* Center vertically and horizontally */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    position: relative;
`;

export default GlobalStyle;
