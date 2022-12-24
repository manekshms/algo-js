class Queue {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.unshift(data);
    }

    remove() {
        return this.data.pop();
    }
}

module.exports = Queue;