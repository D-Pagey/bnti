import styled from 'styled-components';
import { margin, padding } from 'polished';
import { border, colour, fontSize, spacing, mediaQuery } from '../../../../tokens';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${margin(0, 'auto')}
    max-width: 375px;
    ${padding(spacing.large, 0)};

    @media ${mediaQuery.min.medium} {
        flex-direction: row;
        max-width: 100%;
    }
`;

export const TitleWrapper = styled.div`
    @media ${mediaQuery.min.medium} {
        align-items: center;
        flex-direction: column;
        display: flex;
    }
`;

export const Subtitle = styled.h3`
    color: ${colour.blue};
    font-size: ${fontSize.huge};
    ${margin(0, 0, '2rem', 0)};
    max-width: 375px;
    text-align: center;
`;

export const Button = styled.button.attrs({
    type: 'button'
})`
    background: linear-gradient(180deg, #20fff2 0%, rgba(255, 255, 255, 0) 100%), #00a7cb;
    border: 0;
    border-radius: ${border.radiusLarge};
    cursor: pointer;
    font-size: ${fontSize.medium};
    ${margin('0', '0', spacing.medium)};
    opacity: 0.9;
    ${padding('1rem', '1.35rem')};
`;

export const Games = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${mediaQuery.min.medium} {
        width: 450px;
    }
`;

export const GameLogo = styled.img`
    height: auto;
    ${margin('10px', '20px')};
    width: ${({ width }) => width};
`;
