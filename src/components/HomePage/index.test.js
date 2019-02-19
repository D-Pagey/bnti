import React from 'react';
import HomePage from '.';

describe('HomePage component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<HomePage />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
