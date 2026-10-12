class OrderHistoryStack {
    constructor() {
        this.items = [];
    }

    push(order) {
        this.items.push(order);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class OrderQueue {
    constructor(capacity) {
        if (capacity <= 0 || !Number.isInteger(capacity)) {
            throw new Error("Capacity must be a positive integer");
        }

        this.capacity = capacity;
        this.items = new Array(capacity);
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }

    enqueue(order) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }
        this.items[this.tail] = order;
        const nextTail = (this.tail + 1) % this.capacity;
        console.log('nextTail:', nextTail);
        this.tail = nextTail;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const order = this.items[this.head];
        this.items[this.head] = undefined; // Clear the reference to the dequeued order
        const nextHead = (this.head + 1) % this.capacity;
        console.log('nextHead:', nextHead);
        this.head = nextHead;
        this.count--;
        return order;
    }

    size() {
        return this.count;
    }

    isFull() {
        return this.count === this.capacity;
    }

    isEmpty() {
        return this.count === 0;
    }
}

const orderHistory = new OrderHistoryStack();
console.log('orderHistory:', orderHistory);
console.log('orderHistory size:', orderHistory.size());
console.log('orderHistory is empty:', orderHistory.isEmpty());
console.log('orderHistory peek:', orderHistory.peek());

const orderQueue = new OrderQueue(4);
console.log('orderQueue:', orderQueue);
console.log('orderQueue size:', orderQueue.size());
console.log('orderQueue is empty:', orderQueue.isEmpty());
console.log('orderQueue is full:', orderQueue.isFull());

const order1 = {
    orderNumber: 1,
    customer: "Jordan",
    item: "keyboard"
};
const order2 = {
    orderNumber: 2,
    customer: "Alex",
    item: "mouse"
};

const order3 = {
    orderNumber: 3,
    customer: "Taylor",
    item: "monitor"
};

const order4 = {
    orderNumber: 4,
    customer: "Morgan",
    item: "printer"
};

console.assert(orderQueue.isEmpty(), "Order queue should be empty initially");

orderQueue.enqueue(order1);
orderQueue.enqueue(order2);
orderQueue.enqueue(order3);
orderQueue.enqueue(order4);

console.assert(orderQueue.isFull(), "Order queue should be full after enqueuing 4 orders");

console.assert(orderQueue.size() === 4, "Order queue should have 4 orders after enqueuing 4 orders");

console.assert(orderQueue.dequeue() === order1, "Dequeued order should be order1");
console.assert(orderQueue.dequeue() === order2, "Dequeued order should be order2");

orderQueue.enqueue(order1);
orderQueue.enqueue(order2);

console.assert(orderQueue.isFull(), "Order queue should be full after re-enqueuing orders");

console.assert(orderQueue.dequeue() === order3, "Dequeued order should be order3");
console.assert(orderQueue.dequeue() === order4, "Dequeued order should be order4");
console.assert(orderQueue.dequeue() === order1, "Dequeued order should be order1");
console.assert(orderQueue.dequeue() === order2, "Dequeued order should be order2");

console.assert(orderQueue.isEmpty(), "Order queue should be empty after dequeuing all orders");
console.assert(orderQueue.dequeue() === undefined, "Dequeuing from an empty queue should return undefined");
