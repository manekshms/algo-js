class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
       let arr = [this.root];
       while(arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
       }
    }

    traverseDF(fn) {
        let arr = [this.root];
        while(arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = {
    Node,
    Tree
};