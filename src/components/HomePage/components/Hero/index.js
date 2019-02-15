import React from 'react';
import { NavLink } from 'react-router-dom';
import logoApex from './assets/logo-apex.png';
import logoFortnite from './assets/logo-fortnite.png';
import logoPubg from './assets/logo-pubg.png';
import * as S from './styles';

const Hero = () => (
    <S.Background>
        <S.Wrapper>
            <S.Intro>
                <S.Subtitle>Discover a new way to play your favourite games</S.Subtitle>
                <NavLink to="/tournaments">
                    <S.Button>Find games</S.Button>
                </NavLink>
            </S.Intro>
            <S.Games>
                <S.GameLogo src={logoPubg} alt="pubg" width="250px" />
                <S.GameLogo src={logoApex} alt="apex" width="150px" />
                <S.GameLogo src={logoFortnite} alt="fortnite" width="150px" />
            </S.Games>
        </S.Wrapper>
    </S.Background>
);

export default Hero;
