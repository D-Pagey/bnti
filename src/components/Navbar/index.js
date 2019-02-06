import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './styles';

const Navbar = () => {
    return (
        <S.DivWrapper>
            <S.NavList>
                <S.NavItem>
                    <NavLink to="/">Home</NavLink>
                </S.NavItem>
                <S.NavItem>
                    <NavLink to="/delicious">About Us</NavLink>
                </S.NavItem>
                <S.NavItem>
                    <NavLink to="/tasty">Sign Up</NavLink>
                </S.NavItem>
            </S.NavList>
        </S.DivWrapper>
    );
};

export default Navbar;
