import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { margin, padding } from 'polished';
import { border, colour, fontSize, fontWeight, spacing } from '../../tokens';

export const List = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    ${margin(0)};
    ${padding(0)};
`;

export const ListItem = styled.li`
    ${margin(0, spacing.big, 0, 0)}

    &:hover {
        color: ${colour.white};
    }
`;

export const NavbarLink = styled(NavLink)`
    color: inherit;
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.medium};
    text-decoration: none;
`;

export const NavbarButton = styled.button.attrs({
    type: 'button'
})`
    background-color: ${colour.black};
    border: 0;
    border-radius: ${border.radiusLarge};
    color: ${colour.white};
    cursor: pointer;
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.hair};
    ${padding(spacing.tiny, spacing.small)};
`;
