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

const getColor = (i: number) => [
    [200, 100, 100],
    [200, 100, 200],
    [100, 200, 200],
][i % 3];

const k = 1000;
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
        const id = String(i);
        cells[id] = {
            mappings: {
                [mapping]: [pos(u), pos(v)],
            },
        };
        cellColors.set(
            id,
            getColor(i)
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
