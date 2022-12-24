// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

[1, 2, 3, 4, 5, 6]
[5, 4, 3, 2, 1]

const Stack = require('./stack');

class Queue {
    constructor() {
       this.data = new Stack();
    }

    add(data) {
      this.data.push(data);
    }

    peek() {
        const newStack = new Stack();
        while(this.data.peek()) {
            newStack.push(this.data.pop());
        }
        const next = newStack.peek();
        while(newStack.peek()) {
            this.data.push(newStack.pop());
        }
        return next;
    }

    remove() {
        const newStack = new Stack();
        while(this.data.peek()) {
            newStack.push(this.data.pop());
        }
        const removed = newStack.pop();
        while(newStack.peek()) {
            this.data.push(newStack.pop());
        }
        return removed;
    }
}

module.exports = Queue;