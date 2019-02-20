import React from 'react';
import ErrorPage from '.';

describe('ErrorPage component', () => {
    it('should render', () => {
        const { container } = render(<ErrorPage />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
