import styled from 'styled-components';
import { margin } from 'polished';
import { fontWeight, spacing } from '../../tokens';

export const Wrapper = styled.div`
    ${margin(spacing.huge, 'auto', spacing.none)};
    width: 30%;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

export const Label = styled.label`
    align-items: center;
    display: flex;
    font-weight: ${fontWeight.medium};
    justify-content: space-between;
    margin: 5px 0;
`;
