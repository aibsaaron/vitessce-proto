export class Queue<T> {
    private queue: T[];

    private head: number;

    private tail: number;

    public queueSize: number;

    constructor(
        public readonly sizeMax: number
    ) {
        this.queue = Array(sizeMax);
        this.queueSize = 0;
        this.head = 0;
        this.tail = 0;
    }

    public enqueue(item: T): void {
        if (this.queueSize === this.sizeMax) {
            throw new Error('Queue overflow error');
        }

        this.queue[this.tail] = item;
        this.queueSize += 1;

        if (this.tail === this.sizeMax - 1) {
            this.tail = 0;
        } else {
            this.tail += 1;
        }
    }

    public dequeue(): T {
        if (this.queueSize === 0) {
            throw new Error('Queue underflow error');
        }

        const item = this.queue[this.head];
        this.queue[this.head] = undefined;
        this.queueSize -= 1;

        if (this.head === this.sizeMax - 1) {
            this.head = 0;
        } else {
            this.head += 1;
        }

        return item;
    }
}
