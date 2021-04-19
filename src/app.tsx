import React from 'react';
import { Router } from '@reach/router';

import { ScatterPlotBasic } from './pages/scatter-plot-basic/scatter-plot-basic';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { VitessceApp } from './pages/vitessce-app/vitessce-app';

export const App = () => (
    <Router>
        <Home path="/" />
        <ScatterPlotBasic path="/scatter-plot-basic" />
        <VitessceApp path="/vitessce-app" />
        <NotFound default />
    </Router>
);
