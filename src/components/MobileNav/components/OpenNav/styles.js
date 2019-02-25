import styled from 'styled-components';
import { margin, padding } from 'polished';
import { colour } from '../../../../tokens';

export const Wrapper = styled.div`
    background-color: ${colour.blue};
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
`;

export const List = styled.ul`
    list-style: none;
    ${margin(0)};
    ${padding(0)};
`;

export const Button = styled.button.attrs({
    type: 'button'
})``;
