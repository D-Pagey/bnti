import React, { useState } from 'react';
import ClosedNav from './components/ClosedNav';
import OpenNav from './components/OpenNav';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return isOpen ? <OpenNav toggleOpen={toggleOpen} /> : <ClosedNav toggleOpen={toggleOpen} />;
};

export default MobileNav;
