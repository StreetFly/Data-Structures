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

}