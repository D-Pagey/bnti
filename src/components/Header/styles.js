import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { padding } from 'polished';
import { colour, fontSize, spacing } from '../../tokens';

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${colour.blue};
    display: flex;
    justify-content: space-between;
    ${padding(spacing.medium)};
`;

export const Link = styled(NavLink)`
    color: inherit;
    font-size: ${fontSize.huge};
    text-decoration: none;
`;

export const Logo = styled.h2`
    margin: 0;
`;

export const White = styled.span`
    color: white;
`;
