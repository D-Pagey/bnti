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

    it.each`
        viewportWidth | testId
        ${500}        | ${'tournamentsLinkMaxMedium'}
        ${800}        | ${'tournamentsLinkMinMedium'}
    `('should render with navbar', ({ viewportWidth, testId }) => {
        setMatchMedia(viewportWidth);
        const { getByTestId } = renderWithRouter(<Hero />);
        getByTestId(testId);
    });
});
