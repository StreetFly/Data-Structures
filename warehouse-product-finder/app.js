class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (!node) return null;
        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._removeNode(node.right, value);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let temp = node.right;
            while (temp.left) {
                temp = temp.left;
            }
            node.value = temp.value;
            node.right = this._removeNode(node.right, temp.value);
        }
        return node;
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    height(node = this.root) {
        if (!node) return -1;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log(tree.inOrderTraversal());

console.assert(
    tree.contains(50) === true,
    "Product 50 should be in the tree"
);

console.assert(
    tree.contains(80) === true,
    "Product 80 should be in the tree"
);

console.assert(
    tree.contains(99) === false,
    "Product 99 should not be in the tree"
);

tree.remove(80);
console.assert(
    tree.contains(80) === false,
    "Product 80 should not be in the tree after removal"
);
console.log(tree.inOrderTraversal());

tree.remove(70);
console.assert(
    tree.contains(70) === false,
    "Product 70 should not be in the tree after removal"
);
console.log(tree.inOrderTraversal());

tree.remove(30);
console.assert(
    tree.contains(30) === false,
    "Product 30 should not be in the tree after removal"
);
console.log(tree.inOrderTraversal());