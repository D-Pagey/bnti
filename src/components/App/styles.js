import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { fontFamily } from '../../tokens';

export const GlobalStyle = createGlobalStyle`${normalize()}`;

export const Wrapper = styled.div`
    font-family: ${fontFamily.body};
`;
