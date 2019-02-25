import styled from 'styled-components';
import { margin, padding } from 'polished';
import { colour, fontSize } from '../../../../tokens';

export const Wrapper = styled.div`
    background-color: ${colour.blue};
    border-top: 2px solid ${colour.black};
    bottom: 0;
    height: 75px;
    left: 0;
    position: fixed;
    right: 0;
`;

export const List = styled.ul`
    align-items: center;
    display: flex;
    font-size: ${fontSize.medium};
    height: 100%;
    justify-content: space-around;
    list-style: none;
    ${margin(0)};
    ${padding(0)};
    color: black;
`;
