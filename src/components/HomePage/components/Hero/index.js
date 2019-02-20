import React from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { mediaQuery } from '../../../../tokens';
import logoApex from './assets/logo-apex.png';
import logoFortnite from './assets/logo-fortnite.png';
import logoPubg from './assets/logo-pubg.png';
import * as S from './styles';

const Hero = () => (
    <S.Wrapper>
        <S.TitleWrapper>
            <S.Subtitle>Discover a new way to play your favourite games</S.Subtitle>

            <Media
                query={mediaQuery.min.medium}
                render={() => (
                    <NavLink to="/tournaments">
                        <S.Button>Find tournaments</S.Button>
                    </NavLink>
                )}
            />
        </S.TitleWrapper>

        <S.Games>
            <S.GameLogo src={logoPubg} alt="pubg" width="250px" />
            <S.GameLogo src={logoApex} alt="apex" width="150px" />
            <S.GameLogo src={logoFortnite} alt="fortnite" width="150px" />
        </S.Games>

        <Media
            query={mediaQuery.max.medium}
            render={() => (
                <NavLink to="/tournaments">
                    <S.Button>Find tournaments</S.Button>
                </NavLink>
            )}
        />
    </S.Wrapper>
);

export default Hero;
