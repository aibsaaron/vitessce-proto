import React from 'react';

interface InfoProps {
    cellHighlight: string;
    cellSelection: string[];
}
export const Info: React.FunctionComponent<InfoProps> = ({ cellHighlight, cellSelection }) => (
    <div style={{ overflow: 'auto' }}>
        Information
        <div>
            {`Highlighted Cell: ${cellHighlight}`}
        </div>
        <div>
            {`Selected Cells: (${cellSelection.length})`}
            <ul>
                {cellSelection.map((cell) => (
                    <li key={cell}>{cell}</li>
                ))}
            </ul>
        </div>
    </div>
);
