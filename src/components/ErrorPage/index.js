import React from 'react';
import pixelMan from './assets/pixel-man.png';
import * as S from './styles';

const ErrorPage = () => (
    <S.Background>
        <S.Wrapper>
            <S.Title>Oops something went wrong!</S.Title>
            <S.Image src={pixelMan} alt="pixel man" />
            <S.Text>Turn around! The circle is the other way!</S.Text>
            <S.Text>Theres nothing here, no loot, no bounties, nothing, nada.</S.Text>
        </S.Wrapper>
    </S.Background>
);

export default ErrorPage;
