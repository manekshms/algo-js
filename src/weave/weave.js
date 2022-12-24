const Queue = require("./queue");

const weave = (queueA, queueB) => {
    const queue = new Queue();
    while(queueA.peek() !== null || queueB.peek() !== null ) {
        if(queueA.peek()) {
            queue.add(queueA.remove());
        }
        if(queueB.peek()) {
            queue.add(queueB.remove());
        }
    }
    return queue;
}

module.exports = weave;