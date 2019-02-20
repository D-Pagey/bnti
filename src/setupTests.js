import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

global.render = render;
global.renderWithRouter = (ui) => render(<Router history={createMemoryHistory()}>{ui}</Router>);

window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
}));
