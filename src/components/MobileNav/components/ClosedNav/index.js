import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const ClosedNav = ({ toggleOpen }) => (
    <S.Wrapper data-testid="closedNav">
        <S.List>
            <li>Home</li>
            <li>
                <button type="button" onClick={toggleOpen} data-testid="menuButton">
                    Menu
                </button>
            </li>
            <li>Account</li>
        </S.List>
    </S.Wrapper>
);

ClosedNav.propTypes = {
    toggleOpen: PropTypes.func.isRequired
};

export default ClosedNav;
