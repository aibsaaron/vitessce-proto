/* eslint-disable max-len */
import React from 'react';
import { Vitessce } from 'vitessce/src';

import { PageRoute } from '../../types';

const config = {
    name: 'Linnarsson',
    version: '1.0.0',
    description: 'Spatial organization of the somatosensory cortex revealed by cyclic smFISH',
    public: true,
    datasets: [
        {
            uid: 'linnarsson-2018',
            name: 'Linnarsson 2018',
            files: [
                {
                    type: 'cells',
                    fileType: 'cells.json',
                    url: 'https://s3.amazonaws.com/vitessce-data/0.0.31/master_release/linnarsson/linnarsson.cells.json',
                },
                {
                    type: 'cell-sets',
                    fileType: 'cell-sets.json',
                    url: 'https://s3.amazonaws.com/vitessce-data/0.0.31/master_release/linnarsson/linnarsson.cell-sets.json',
                },
                {
                    type: 'neighborhoods',
                    fileType: 'neighborhoods.json',
                    url: 'https://s3.amazonaws.com/vitessce-data/0.0.31/master_release/linnarsson/linnarsson.neighborhoods.json',
                },
                {
                    type: 'expression-matrix',
                    fileType: 'clusters.json',
                    url: 'https://s3.amazonaws.com/vitessce-data/0.0.31/master_release/linnarsson/linnarsson.clusters.json',
                },
            ],
        },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
        embeddingZoom: {
            PCA: 0,
            TSNE: 0.75,
        },
        embeddingType: {
            PCA: 'PCA',
            TSNE: 't-SNE',
        },
        spatialZoom: {
            A: -5.5,
        },
        spatialTargetX: {
            A: 16000,
        },
        spatialTargetY: {
            A: 20000,
        },
    },
    layout: [
        {
            component: 'description',
            props: {
                description: 'Linnarsson: Spatial organization of the somatosensory cortex revealed by cyclic smFISH',
            },
            x: 0,
            y: 0,
            w: 2,
            h: 1,
        },
        {
            component: 'layerController',
            x: 0,
            y: 1,
            w: 2,
            h: 4,
        },
        {
            component: 'status',
            x: 0,
            y: 5,
            w: 2,
            h: 1,
        },
        {
            component: 'spatial',
            coordinationScopes: {
                spatialZoom: 'A',
                spatialTargetX: 'A',
                spatialTargetY: 'A',
            },
            x: 2,
            y: 0,
            w: 4,
            h: 4,
        },
        {
            component: 'genes',
            x: 9,
            y: 0,
            w: 3,
            h: 2,
        },
        {
            component: 'cellSets',
            x: 9,
            y: 3,
            w: 3,
            h: 2,
        },
        {
            component: 'heatmap',
            props: {
                transpose: true,
            },
            x: 2,
            y: 4,
            w: 10,
            h: 2,
        },
        {
            component: 'scatterplot',
            coordinationScopes: {
                embeddingType: 'PCA',
                embeddingZoom: 'PCA',
            },
            x: 6,
            y: 0,
            w: 3,
            h: 2,
        },
        {
            component: 'scatterplot',
            coordinationScopes: {
                embeddingType: 'TSNE',
                embeddingZoom: 'TSNE',
            },
            x: 6,
            y: 2,
            w: 3,
            h: 2,
        },
    ],
};

export const VitessceApp: PageRoute = () => {
    const appTitle = 'V I T E S S C E . A P P';

    return (
        <div>
            {appTitle}
            <Vitessce
                config={config}
                theme="dark"
            />
        </div>
    );
};
