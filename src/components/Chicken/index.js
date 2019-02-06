import React, { Fragment } from 'react';
import { objectOf, any } from 'prop-types';

const Chicken = ({ match }) => {
    return (
        <Fragment>
            <p>Hello Nav, I like {match.path.slice(1)} chicken</p>
        </Fragment>
    );
};

Chicken.propTypes = {
    match: objectOf(any).isRequired
};

export default Chicken;
