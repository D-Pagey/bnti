import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import * as S from './styles';

const Navbar = () => {
    const { authSession, authLogout } = useContext(AuthContext);

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
                <S.NavbarLink to="/signup">Sign Up</S.NavbarLink>
            </S.ListItem>

            <S.ListItem>
                {authSession ? (
                    <S.NavbarButton onClick={authLogout} data-testid="logoutButton">
                        Logout
                    </S.NavbarButton>
                ) : (
                    <S.NavbarLink to="login">
                        <S.NavbarButton>Login</S.NavbarButton>
                    </S.NavbarLink>
                )}
            </S.ListItem>
        </S.List>
    );
};

export default Navbar;
