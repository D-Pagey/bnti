import styled from 'styled-components';
import { margin } from 'polished';
import { colour, fontFamily, spacing } from '../../tokens';

export const Wrapper = styled.div`
    background-color: ${colour.black};
    font-family: ${fontFamily.body};
    ${margin(0, 0, spacing.super)}
`;
