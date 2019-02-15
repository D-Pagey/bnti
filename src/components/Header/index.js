import React from 'react';
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

            <Navbar />
        </S.Wrapper>
    );
};

export default Header;
