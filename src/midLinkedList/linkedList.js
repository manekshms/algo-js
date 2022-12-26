class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        if(this.head === null) {
            const node = new Node(data);
            this.head = node;
        }else {
            const headNode = this.head;
            const node = new Node(data, headNode);
            this.head = node
        }
    }

    insertLast(data) {
        let node = this.head;
        if(!node) {
            this.head = new Node(data);
            return;
        }
        while(node.next) {
            node = node.next;
        }
        node.next = new Node(data);
    }

    getFirst() {
        return this.head;
    }

    getAt(number) {
        let node = this.head;
        let index = 0;
        while(node && index <= number) {
            if(index === number) {
                return node;
            }
            node = node.next;
            index++;
        }
        return null;
    }

    getLast() {
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        return node;
    }

    removeFirst() {
        if(this.head) {
            const next = this.head.next;
            this.head = next;
        }
    }

    removeLast() {
        let node = this.head;
        if(!node) {
            return;
        }
        if(!node.next) {
            this.head = null;
        }
        while(node.next) {
            let prev = node;
            node = node.next;
            if(!node.next) {
                prev.next = null;
            }
        }
    }

    removeAt(number) {
        let node = this.head;
        let prevNode = null;
        let index = 0;
        while(node && index <= number) {
            if(index === number) {
                if(prevNode === null) {
                    this.head = node.next;
                }else {
                    prevNode.next = node.next;
                }
                return node.data;
            }
            index++;
            prevNode = node;
            node = node.next;
        }
        return null;
    }
    
    insertAt(value, number) {
       let node = this.head; 
       let index = 0;
       let prevNode = null;
       if(this.head === null && number === 0) {
            this.head = new Node(value);
       }
       while(node || index === number) {
            if(index === number) {
                if(prevNode === null) {
                    const newNode = new Node(value, this.head);
                    this.head = newNode;
                    return;
                }else {
                    prevNode.next = new Node(value, node);
                    return;
                }
            }
            prevNode = node;
            index++;
            node = node.next;
       }
       prevNode.next = new Node(value);
    }

    forEach(fn) {
        let node = this.head;
        while(node) {
            fn(node);
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if(current) {
                    let out = { done: false, value: current};
                    current = current.next;
                    return out;
                }else {
                    return { done: true};
                }
            }
        }
    }
}



class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

module.exports = {
    LinkedList,
    Node
}