import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { margin, padding } from 'polished';
import { colour, fontSize, mediaQuery, spacing } from '../../tokens';

export const Wrapper = styled.div`
    align-items: center;
    color: ${colour.white};
    display: flex;
    flex-direction: column;
    ${padding(spacing.large, spacing.small)};
    ${margin(0, 'auto')};
    max-width: 650px;

    @media ${mediaQuery.min.medium} {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(4, 25%);
        justify-items: center;
    }
`;

export const Title = styled.h3`
    font-size: ${fontSize.huge};
    text-align: center;
    ${margin(0)}
`;

export const White = styled.span`
    color: ${colour.white};
`;

export const Blue = styled.span`
    color: ${colour.blue};
`;

export const List = styled.ul`
    border-bottom: 1px solid ${colour.white};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 5px;
    list-style: none;
    ${margin(spacing.large, 0, spacing.tiny)};
    ${padding(0, 0, spacing.large)};
    width: 265px;

    @media ${mediaQuery.min.medium} {
        border-top: 1px solid ${colour.white};
        grid-column: 2 / 3;
        grid-row: 1 / 5;
        ${margin(0)};
        ${padding(spacing.large, 0)};
    }
`;

export const ListItem = styled.li`
    text-align: center;
`;

export const FooterLink = styled(Link)`
    color: ${colour.white};
    text-decoration: none;
`;

export const LinkLegal = styled.p`
    ${margin(spacing.small, 0)};
`;

export const SocialWrapper = styled.div`
    display: flex;
`;

export const Logo = styled.img`
    ${margin(spacing.small, spacing.tiny)}
`;
