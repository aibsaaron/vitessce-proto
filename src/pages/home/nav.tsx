import React from 'react';
import { Link } from '@reach/router';

export const Nav = () => (
    <nav>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/scatter-plot-basic">Scatter Plot Basic</Link>
        </div>
    </nav>
);
