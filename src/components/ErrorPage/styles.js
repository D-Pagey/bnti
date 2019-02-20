import styled from 'styled-components';
import { padding } from 'polished';
import { colour, fontSize, spacing } from '../../tokens';

export const Background = styled.div`
    background-color: ${colour.black};
    height: 100vh;
    ${padding(spacing.big, spacing.medium)}
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 375px;
`;

export const Title = styled.h1`
    color: ${colour.blue};
    font-size: ${fontSize.big};
`;

export const Image = styled.img`
    height: auto;
    width: 150px;
`;

export const Text = styled.p`
    color: ${colour.blue};
    font-size: ${fontSize.medium};
    width: 100%;
`;
