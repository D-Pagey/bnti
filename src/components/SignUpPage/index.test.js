import React from 'react';
import SignUpPage from '.';

describe('SignUpPage component', () => {
    it('should render', () => {
        const { container } = render(<SignUpPage />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
