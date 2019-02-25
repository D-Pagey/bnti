import React from 'react';
import userEvent from 'user-event';
import MobileNav from '.';

describe('MobileNav component', () => {
    it('should render', () => {
        const { container } = renderWithRouter(<MobileNav />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render OpenNav on Click', () => {
        const { getByTestId } = renderWithRouter(<MobileNav />);
        const menuButton = getByTestId('menuButton');

        userEvent.click(menuButton);
        getByTestId('openNav');
    });
});

/* Qs for Nav
 * expect Closed Nav by default?
 * simulate click, expect openNav but check that closedNav not rendering
 * why user-event over FireEvent?
 */
