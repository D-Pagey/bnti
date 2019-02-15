import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from '.';

const renderWithRouter = (ui) => render(<Router history={createMemoryHistory()}>{ui}</Router>);

describe('Navbar component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<Navbar />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
