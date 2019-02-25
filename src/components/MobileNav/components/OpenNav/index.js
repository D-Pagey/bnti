import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const OpenNav = ({ toggleOpen }) => {
    return (
        <S.Wrapper data-testid="openNav">
            <S.List>
                <li>Find Tournaments</li>
                <li>About</li>
                <li>
                    <S.Button onClick={toggleOpen}>Close Menu</S.Button>
                </li>
                <li>Sign up/Login</li>
                <li>Account</li>
            </S.List>
        </S.Wrapper>
    );
};

OpenNav.propTypes = {
    toggleOpen: PropTypes.func.isRequired
};

export default OpenNav;
