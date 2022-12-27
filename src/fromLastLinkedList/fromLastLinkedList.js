
const move = (node, n) => {
    while(n > 0) {
        node = node.next;
        n--;
    }
    return node;
}

const fromLast = (list, n) => {
    let slow = list.head;
    let fast = move(slow, n);
    while(fast.next) {
        slow = slow.next;
        fast = move(slow, n);
    }
    return slow;
}

module.exports = fromLast;