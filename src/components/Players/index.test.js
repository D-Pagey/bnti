import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Players from '.';

describe('Players component', () => {
    it('should render', () => {
        const { container } = render(<Players />);
        expect(container.firstChild).toMatchSnapshot();
    });

    // trying to test that on dropdown change the value in the box
    // will change but struggling
    it('should change player on dropdown', () => {
        const { getByText } = render(<Players />);
        const selectElement = getByText('GingerVking');
        fireEvent.change(selectElement, { target: { value: 'Hunty' } });
        expect(selectElement.text).toBe('Hunty');
    });
});
