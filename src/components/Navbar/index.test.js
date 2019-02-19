import React from 'react';
import AuthContext from '../../contexts/auth';
import Navbar from '.';

describe('Navbar component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<Navbar />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with logout button', () => {
        const { getByTestId } = renderWithRouter(
            <AuthContext.Provider value={{ authSession: {} }}>
                <Navbar />
            </AuthContext.Provider>
        );

        getByTestId('logoutButton');
    });
});
