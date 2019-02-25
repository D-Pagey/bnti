import React from 'react';
import ClosedNav from '.';

describe('ClosedNav component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<ClosedNav />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
