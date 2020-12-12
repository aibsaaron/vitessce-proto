/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Status } from 'vitessce/dist/es/production/status';
import { Scatterplot } from 'vitessce/dist/es/production/scatterplot';
import 'vitessce/dist/es/production/static/css/index.css';

const fnLog = (str: string) => (...rest: any) => {
    console.log(str);
    console.log(...rest);
    console.log('');
};

export const App = () => {
    const m = 'TEST APP';

    const initialViewState = { target: [0, 0, 0], zoom: 0.75 };
    const [viewState, setViewState] = useState(initialViewState);

    const dimensions = { width: '400px', height: '400px', margin: '10px' };
    const mapping = 'PCA';
    const cells = {
        1: { mappings: { [mapping]: [0, 0] } },
        2: { mappings: { [mapping]: [1, 1] } },
        3: { mappings: { [mapping]: [1, 2] } },
    };
    const cellColors = new Map();
    cellColors.set('1', [68, 119, 170, 255]);
    cellColors.set('2', [68, 119, 170, 255]);
    cellColors.set('3', [68, 119, 170, 255]);

    return (
        <div className="vitessce-container vitessce-theme-light">
            <div>{m}</div>
            <div className="card card-body bg-secondary" style={dimensions}>
                <Status
                    info="Status info"
                    warn="Status warn"
                />
            </div>
            <div className="card card-body bg-secondary" style={dimensions}>
                {/**
                     * React component which renders a scatterplot from cell data, typically tSNE or PCA.
                     * @param {object} props
                     * @param {string} props.uuid A unique identifier for this component.
                     * @param {string} props.theme The current vitessce theme.
                     * @param {object} props.viewState The deck.gl view state.
                     * @param {function} props.setViewState Function to call to update the deck.gl view state.
                     * @param {object} props.cells
                     * @param {string} props.mapping The name of the coordinate mapping field,
                     * for each cell, for example "PCA" or "t-SNE".
                     * @param {Map} props.cellColors Mapping of cell IDs to colors.
                     * @param {array} props.cellSelection Array of selected cell IDs.
                     * @param {array} props.cellFilter Array of filtered cell IDs. By default, null.
                     * @param {number} props.cellRadiusScale The value for `radiusScale` to pass
                     * to the deck.gl cells ScatterplotLayer.
                     * @param {number} props.cellOpacity The value for `opacity` to pass
                     * to the deck.gl cells ScatterplotLayer.
                     * @param {function} props.getCellCoords Getter function for cell coordinates
                     * (used by the selection layer).
                     * @param {function} props.getCellPosition Getter function for cell [x, y, z] position.
                     * @param {function} props.getCellColor Getter function for cell color as [r, g, b] array.
                     * @param {function} props.getCellIsSelected Getter function for cell layer isSelected.
                     * @param {function} props.setCellSelection
                     * @param {function} props.setCellHighlight
                     * @param {function} props.updateViewInfo
                     * @param {function} props.onToolChange Callback for tool changes
                     * (lasso/pan/rectangle selection tools).
                     * @param {function} props.onCellClick Getter function for cell layer onClick.
                */}
                <Scatterplot
                    cellColors={cellColors}
                    cellFilter={null}
                    cellOpacity={1}
                    cellRadiusScale={1}
                    cells={cells}
                    cellSelection={['1', '2', '3']}
                    getCellColor={([i]: any) => cellColors.get(i)}
                    getCellCoords={(d: any) => d.mappings[mapping]}
                    getCellIsSelected={() => false}
                    getCellPosition={([_, d]: any) => d.mappings[mapping]}
                    mapping={mapping}
                    onCellClick={fnLog('onCellClick')}
                    onToolChange={fnLog('onToolChange')}
                    setCellHighlight={fnLog('setCellHighlight')}
                    setCellSelection={fnLog('setCellSelection')}
                    setViewState={setViewState}
                    theme="dark"
                    updateViewInfo={fnLog('updateViewInfo')}
                    uuid="my-vitessce-scatterplot"
                    viewState={viewState}
                />
            </div>
        </div>
    );
};
