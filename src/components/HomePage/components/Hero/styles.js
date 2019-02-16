import styled from 'styled-components';
import { colour } from '../../../../tokens';

export const Background = styled.div`
    background-color: ${colour.black};
    display: flex;
    height: 400px;
    padding: 1rem 0;
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    width: 950px;
`;

export const Intro = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 450px;
`;

export const Subtitle = styled.h3`
    color: ${colour.blue};
    font-size: 36px;
    margin: 0 0 2rem 0;
    text-align: center;
`;

export const Button = styled.button.attrs({
    type: 'button'
})`
    background: linear-gradient(180deg, #20fff2 0%, rgba(255, 255, 255, 0) 100%), #00a7cb;
    border: 0;
    border-radius: 33px;
    cursor: pointer;
    font-size: 1.25rem;
    opacity: 0.9;
    padding: 1rem 1.35rem;
`;

export const Games = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 430px;
`;

export const GameLogo = styled.img`
    height: auto;
    margin: 10px 20px;
    width: ${(props) => props.width};
`;
