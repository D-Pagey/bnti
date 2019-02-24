import React from 'react';
import Footer from '.';

describe('Footer component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<Footer />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
