const fs = require('fs');
const g = require('./genes');

function main() {
    const cellsK = 100000;
    const cellIds = Array(cellsK).fill(1).map((d, i) => String(i));
    const matrix = g.genes.map(() => cellIds.map(() => Math.random()));
    const cellMappings = cellIds.reduce((accCM, id) => ({
        ...accCM,
        [id]: {
            factors: {
                cluster: 'A',
                subcluster: 'a',
            },
            genes: g.genes.reduce((accG, gene, i) => ({
                ...accG,
                [gene]: i % 10,
            }), {}),
            mappings: {
                't-SNE': [
                    Math.floor(((Math.random() * 800) - 400) * 1000) / 1000,
                    Math.floor(((Math.random() * 800) - 400) * 1000) / 1000,
                ],
            },
        },
    }), {});
    const cellSets = {
        datatype: 'cell',
        version: '0.1.2',
        tree: [{
            name: 'Cell Type Annotations',
            children: [
                {
                    name: 'A',
                    children: [
                        {
                            name: 'a',
                            set: cellIds,
                        },
                    ],
                },
            ],
        }],
    };

    // create cluster.json
    fs.writeFileSync(`./make-data/aibs-test-${cellsK}.clusters.json`, JSON.stringify({
        cols: cellIds,
        matrix,
        rows: g.genes,
    }), (err) => {
        if (err) {
            throw err;
        }
    });

    // create cells.json
    fs.writeFileSync(`./make-data/aibs-test-${cellsK}.cells.json`, JSON.stringify(cellMappings));

    // create cell-sets.json
    fs.writeFileSync(`./make-data/aibs-test-${cellsK}.cell-sets.json`, JSON.stringify(cellSets));
}

main();
