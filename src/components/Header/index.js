import React from 'react';

import * as S from './styles';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <S.DivWrapper>
            <S.HeaderLogo>BANTAI</S.HeaderLogo>
            <Navbar />
        </S.DivWrapper>
    );
};

export default Header;
