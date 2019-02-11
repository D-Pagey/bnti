import React from 'react';
import { render } from 'react-testing-library';
import userEvent from 'user-event';
import { LoginPage } from '.';

const props = {
    history: { goBack: () => {} }
};

describe('LoginPage component', () => {
    it('should render', () => {
        const { container } = render(<LoginPage {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should handle back button', () => {
        const goBack = jest.fn();
        const history = { goBack };
        const { getByTestId } = render(<LoginPage {...props} history={history} />);
        const backButton = getByTestId('backButton');

        userEvent.click(backButton);
        expect(goBack).toHaveBeenCalled();
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
            const { getByTestId } = render(<LoginPage {...props} />);
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
        const { getByTestId } = render(<LoginPage {...props} />);
        const input = getByTestId(`${type}Input`);

        expect(input.value).toEqual('');
        userEvent.type(input, value);
        expect(input.value).toEqual(value);
    });
});
