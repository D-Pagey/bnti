import React from 'react';
import Header from '.';

describe('Header component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<Header />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with navbar', () => {
        setMatchMedia(800);
        const { getByTestId } = renderWithRouter(<Header />);
        getByTestId('navbar');
    });
});
