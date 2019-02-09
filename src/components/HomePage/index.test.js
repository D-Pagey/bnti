import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HomePage from '.';

const renderWithRouter = (ui) => render(<Router history={createMemoryHistory()}>{ui}</Router>);

describe('HomePage component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<HomePage />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
