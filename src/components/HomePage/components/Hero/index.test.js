import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Hero from '.';

const renderWithRouter = (ui) => render(<Router history={createMemoryHistory()}>{ui}</Router>);

describe('Hero component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<Hero />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
