import React from 'react';
import { render } from 'react-testing-library';
import Walkthrough from '.';

describe('Walkthrough component', () => {
    it('should render', () => {
        const { container } = render(<Walkthrough />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
