import styled from 'styled-components';
import { margin, padding } from 'polished';
import { colour, fontSize, spacing } from '../../../../tokens';

export const Background = styled.div`
    background-color: ${colour.blue};
    ${padding(spacing.large, spacing.none)}
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: ${spacing.big} auto;
`;

export const Step = styled.div`
    align-items: center;
    border-right: 1px solid ${colour.black};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 225px;
    ${padding(spacing.medium, spacing.medium, spacing.big)}
    width: 25%;

    &:last-child {
        border: 0;
    }
`;

export const Image = styled.img`
    height: auto;
    width: ${({ width = '100px' }) => width};
`;

export const Subtitle = styled.h3`
    font-size: ${fontSize.large};
    ${margin(spacing.medium, spacing.none)}
    text-align: center;
`;

export const Text = styled.p`
    margin: ${spacing.none};
    text-align: center;
`;
