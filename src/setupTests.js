import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

global.render = render;
global.renderWithRouter = (ui) => render(<Router history={createMemoryHistory()}>{ui}</Router>);

global.setMatchMedia = (viewportWidth) => {
    global.matchMedia = jest.fn().mockImplementation((query) => {
        const isMinWidth = query.includes('min-width');
        const isMaxWidth = query.includes('max-width');
        const queryWidth = parseInt((/(\d+)px/.exec(query) || [])[0], 10);

        let matches = false;

        if (isMinWidth) matches = viewportWidth > queryWidth;
        if (isMaxWidth) matches = viewportWidth < queryWidth;

        return {
            matches,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn()
        };
    });
};

setMatchMedia(320);
