import styled from 'styled-components';
import { margin, padding } from 'polished';
import { colour, fontSize, mediaQuery, spacing } from '../../../../tokens';

export const Background = styled.div`
    background-color: ${colour.blue};
    ${padding(spacing.large, spacing.none)};

    @media ${mediaQuery.min.medium} {
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media ${mediaQuery.min.medium} {
        flex-direction: row;
    }
`;

export const Step = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    ${padding(spacing.medium, spacing.medium, spacing.big)};
    max-width: 225px;
`;

export const Image = styled.img`
    height: auto;
    width: ${({ width = '100px' }) => width};
`;

export const Subtitle = styled.h3`
    font-size: ${fontSize.large};
    ${margin(spacing.medium, spacing.none)};
    text-align: center;
`;

export const Text = styled.p`
    margin: ${spacing.none};
    text-align: center;
`;
