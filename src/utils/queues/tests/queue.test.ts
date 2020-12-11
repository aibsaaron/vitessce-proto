import { Queue } from '../queue';

describe('Queue', () => {
    describe('Basic properties', () => {
        const q = new Queue<string>(3);

        test('it should enqueue an item', () => {
            expect(q.queueSize).toEqual(0);
            q.enqueue('abc');
            expect(q.queueSize).toEqual(1);
        });

        test('it should dequeue an item', () => {
            expect(q.queueSize).toEqual(1);
            expect(q.dequeue()).toEqual('abc');
            expect(q.queueSize).toEqual(0);
        });

        test('it follows fifo', () => {
            q.enqueue('abc');
            q.enqueue('qrs');
            q.enqueue('xyz');
            expect(q.dequeue()).toEqual('abc');
            expect(q.dequeue()).toEqual('qrs');
            expect(q.dequeue()).toEqual('xyz');
            expect(q.queueSize).toEqual(0);
        });
    });

    describe('Errors', () => {
        test('it throws if queue overflows', () => {
            const q = new Queue<string>(3);
            q.enqueue('abc');
            q.enqueue('qrs');
            q.enqueue('xyz');
            expect(() => q.enqueue('foo')).toThrow();
        });

        test('it throws if queue underflows', () => {
            const q = new Queue<string>(3);
            q.enqueue('abc');
            q.enqueue('qrs');
            q.dequeue();
            q.dequeue();
            expect(() => q.dequeue()).toThrow();
        });
    });
});
