import React from 'react';
import Navbar from '.';

describe('Navbar component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<Navbar />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
