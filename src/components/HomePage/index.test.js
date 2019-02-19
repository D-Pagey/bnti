import React from 'react';
import AuthContext from '../../contexts/auth';
import HomePage from '.';

describe('HomePage component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<HomePage />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should display jwt token', () => {
        const authSession = { idToken: { jwtToken: 'foobar123' } };
        const { getByTestId } = renderWithRouter(
            <AuthContext.Provider value={{ authSession }}>
                <HomePage />
            </AuthContext.Provider>
        );

        expect(getByTestId('jwtToken')).toHaveTextContent(authSession.idToken.jwtToken);
    });
});
