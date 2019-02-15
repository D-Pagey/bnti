import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colours } from '../../tokens/colours';

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${colours.primaryColour};
    display: flex;
    justify-content: space-between;
    padding: 1.3rem 1rem;
`;

export const Link = styled(NavLink)`
    color: inherit;
    text-decoration: none;
`;

export const Logo = styled.h2`
    margin: 0;
`;

export const White = styled.span`
    color: white;
`;
