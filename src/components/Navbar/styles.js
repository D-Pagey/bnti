import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    margin-right: 2rem;

    &:hover {
        color: white;
    }
`;

export const NavbarLink = styled(NavLink)`
    color: inherit;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
`;

export const NavbarButton = styled.button.attrs({
    type: 'button'
})`
    background-color: black;
    border: 0;
    border-radius: 16px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 100;
    padding: 5px 15px;
`;
