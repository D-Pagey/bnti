import React from 'react';
import { render } from 'react-testing-library';

import PlayerStats from '.';

const props = {
    kills: 500,
    deaths: 250,
    wins: 1,
    playerName: 'GingerVking'
};

describe('PlayerStats component', () => {
    it('should render', () => {
        const { container } = render(<PlayerStats {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
