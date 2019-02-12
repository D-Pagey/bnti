import React from 'react';
import userEvent from 'user-event';
import AuthContext from '../../contexts/auth';
import LoginPage from '.';

describe('LoginPage component', () => {
    it('should render', () => {
        const { container } = render(<LoginPage />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it.each`
        email            | password    | disabled
        ${null}          | ${null}     | ${true}
        ${'foo@bar.com'} | ${null}     | ${true}
        ${null}          | ${'foobar'} | ${true}
        ${'foo@bar.com'} | ${'foobar'} | ${false}
    `(
        'should have submit disabled ($disabled) when email is $email and password is $password',
        ({ email, password, disabled }) => {
            const { getByTestId } = render(<LoginPage />);
            const emailInput = getByTestId('emailInput');
            const passwordInput = getByTestId('passwordInput');
            const loginButton = getByTestId('loginButton');

            if (email) userEvent.type(emailInput, email);
            if (password) userEvent.type(passwordInput, password);

            if (disabled) expect(loginButton).toBeDisabled();
            else expect(loginButton).not.toBeDisabled();
        }
    );

    it.each(['email', 'password'])('should handle %s change', (type) => {
        const value = 'foobar';
        const { getByTestId } = render(<LoginPage />);
        const input = getByTestId(`${type}Input`);

        expect(input.value).toEqual('');
        userEvent.type(input, value);
        expect(input.value).toEqual(value);
    });

    it('should display auth session JSON instead of login form', () => {
        const { queryByTestId, getByTestId } = renderWithRouter(
            <AuthContext.Provider value={{ authSession: {} }}>
                <LoginPage />
            </AuthContext.Provider>
        );

        expect(queryByTestId('loginForm')).toBeNull();
        getByTestId('authSessionJSON');
    });

    it('should call auth login with credentials on form submit', () => {
        const email = 'foo@bar.com';
        const password = 'foobar123';
        const authLogin = jest.fn();
        const { getByTestId } = renderWithRouter(
            <AuthContext.Provider value={{ authLogin }}>
                <LoginPage />
            </AuthContext.Provider>
        );

        userEvent.type(getByTestId('emailInput'), email);
        userEvent.type(getByTestId('passwordInput'), password);
        userEvent.click(getByTestId('loginButton'));

        expect(authLogin).toHaveBeenCalledWith(email, password);
    });
});
