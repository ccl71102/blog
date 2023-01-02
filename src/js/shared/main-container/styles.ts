import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${800 / 16}rem;
    font-family: 'Oxygen', sans-serif;
    font-size: ${16 / 16}rem;
    font-color: #2d2d2d;
    line-height: 1.5;
    margin: 0 auto;
`;