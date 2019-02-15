import React from 'react';
import * as S from './styles';

const Navbar = () => {
    return (
        <S.List>
            <S.ListItem>
                <S.NavbarLink to="/about">About</S.NavbarLink>
            </S.ListItem>

            <S.ListItem>
                <S.NavbarLink to="/tournaments">Tournaments</S.NavbarLink>
            </S.ListItem>

            <S.ListItem>
                <S.NavbarLink to="/stats">Stats</S.NavbarLink>
            </S.ListItem>

            <S.ListItem>
                <S.NavbarLink to="signup">
                    <S.NavbarButton>Sign Up</S.NavbarButton>
                </S.NavbarLink>
            </S.ListItem>
        </S.List>
    );
};

export default Navbar;
