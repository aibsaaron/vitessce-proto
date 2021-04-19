const fs = require('fs');
const g = require('../genes');

// create Vitessce data for
// mouse-cortex-and-hippocampus

const fileName = 'mouse-cortex-and-hippocampus';

function main() {
    const { genes } = g;

    // create cluster.json
    fs.writeFileSync(`./make-data/${fileName}.clusters.json`, JSON.stringify({
        cols: cellIds,
        matrix,
        rows: genes,
    }), (err) => {
        if (err) {
            throw err;
        }
    });

    // create cells.json
    fs.writeFileSync(`./make-data/${fileName}.cells.json`, JSON.stringify(cellMappings));

    // create cell-sets.json
    fs.writeFileSync(`./make-data/${fileName}.cell-sets.json`, JSON.stringify(cellSets));
}

main();
