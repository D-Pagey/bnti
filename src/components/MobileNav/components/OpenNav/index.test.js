import React from 'react';
import OpenNav from '.';

describe('OpenNav component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<OpenNav />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
