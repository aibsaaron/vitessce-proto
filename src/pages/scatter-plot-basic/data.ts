export interface Cells {
    [id: string]: {
        [mappings: string]: {
            [mapping: string]: number[];
        }
    }
}
export type CellColors = Map<string, number[]>;
export interface MockData {
    cells: Cells;
    cellColors: CellColors;
}

const grouper = (a: number, b: number) => (x: number, y: number) => a * x + b * y;

const groupA = grouper(1, 1);
const groupB = grouper(-2, 0);
const groupC = grouper(2, -3);

const getColor = (x: number, y: number) => {
    const c = [
        [120, 156, 74],
        [130, 122, 163],
        [249, 157, 32],
    ];

    const ind = [groupA(x, y), groupB(x, y), groupC(x, y)]
        .reduce((maxInd, d, i, a) => (a[maxInd] > d ? maxInd : i), 0);

    return c[ind];
};

const k = 300;
const n = k * k;
let mockData: MockData;

const generateMockData = async (mapping: string): Promise<MockData> => {
    // const cells = {
    //     1: { mappings: { [mapping]: [0, 0] } },
    //     2: { mappings: { [mapping]: [1, 1] } },
    //     3: { mappings: { [mapping]: [1, 2] } },
    // };
    const cells: Cells = {};
    const cellColors: CellColors = new Map();
    // cellColors.set('1', [68, 119, 170, 255]);
    // cellColors.set('2', [68, 119, 170, 255]);
    // cellColors.set('3', [68, 119, 170, 255]);

    for (let i = 1; i <= n; i += 1) {
        const u = ((i - 1) % k) / k;
        const v = Math.floor((i - 1) / k) / k;
        const pos = (t: number) => (1 - t) * (-k) + (t) * k;
        const x = pos(u);
        const y = pos(v);
        const id = String(i);
        cells[id] = {
            mappings: {
                [mapping]: [x, y],
            },
        };
        cellColors.set(
            id,
            getColor(x, y)
        );
    }

    return ({
        cells,
        cellColors,
    });
};

export const fetchData = async (mapping: string) => {
    if (mockData) {
        return mockData;
    }

    mockData = await generateMockData(mapping);

    return mockData;
};
