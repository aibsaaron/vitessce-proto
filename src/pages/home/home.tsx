import React from 'react';
import { PageRoute } from '../../types';
import { Nav } from './nav';

export const Home: PageRoute = () => (
    <div>
        <h1>Vitessce Prototype Explorer</h1>
        <Nav />
    </div>
);
