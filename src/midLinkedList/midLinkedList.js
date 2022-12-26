const midPoint = (list) => {
    let node = list.head;
    if(!node) {
        return null;
    }

    if(!node.next) {
        return node;
    }
    let slow = node;
    let fast = node;

    while(node) {
        if(!fast.next || !fast.next.next) {
            return slow;
        }
        slow = node.next;
        fast = node.next.next;
        node = node.next;
    }
    return null;
}

module.exports = midPoint;
