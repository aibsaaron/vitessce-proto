import React from 'react';
import { Router } from '@reach/router';

import { ScatterPlotBasic } from './pages/scatter-plot-basic/scatter-plot-basic';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';

export const App = () => (
    <Router>
        <Home path="/" />
        <ScatterPlotBasic path="/scatter-plot-basic" />
        <NotFound default />
    </Router>
);
