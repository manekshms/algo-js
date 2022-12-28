class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if(data > this.data) {
            if(this.right === null) {
                this.right = new Node(data);
            }else {
                this.right.insert(data);
            }
        }else {
            if(this.left === null) {
                this.left = new Node(data);
            }else {
                this.left.insert(data);
            }
        }
    }

    contains(data) {
        if(data === this.data) {
            return this;
        }
        if(data > this.data && this.right) {
            return this.right.contains(data);
        }
        if(data < this.data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }
}

module.exports = Node;