import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${80 / 16}rem;
    background-color: #0e87f2;
`;

export const NavbarLink = styled(Link)`
    padding: ${16 / 16}rem;
    font-family: 'Oxygen', sans-serif;
    font-size: ${20 / 16}rem;
    color: white;
    text-decoration: none;
    transition: color 0.5s;
    text-transform: uppercase;
    line-height: 1.5;

    &:hover {
        color: #dee7ef;
    }
`;