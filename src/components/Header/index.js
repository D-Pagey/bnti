import React from 'react';
import Media from 'react-media';
import { mediaQuery } from '../../tokens';
import Navbar from '../Navbar';
import * as S from './styles';

const Header = () => {
    return (
        <S.Wrapper>
            <S.Logo>
                <S.Link to="/">
                    <S.White>BR</S.White>Battles
                </S.Link>
            </S.Logo>

            <Media query={mediaQuery.min.medium} render={() => <Navbar />} />
        </S.Wrapper>
    );
};

export default Header;
