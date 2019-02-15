import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from '.';

const renderWithRouter = (ui) => render(<Router history={createMemoryHistory()}>{ui}</Router>);

describe('Header component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<Header />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
