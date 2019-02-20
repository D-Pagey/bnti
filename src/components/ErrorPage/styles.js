import styled from 'styled-components';
import { colour, fontSize } from '../../tokens';

export const Background = styled.div`
    background-color: ${colour.black};
    height: 100vh;
    padding-top: 4rem;
    width: 100%;
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
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
`;
