const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
module.exports = class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {

    this.rootTree = addWithin(this.rootTree, data);

    function addWithin(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      (data < node.data)
        ? node.left = addWithin(node.left, data)
        : node.right = addWithin(node.right, data);

      return node;
    }

    // const newRootTree = new Node(data);
    // let currentRootTree = this.rootTree;

    // if (!this.rootTree) {
    //   this.rootTree = newRootTree;
    //   return;
    // }

    // while (currentRootTree) {
    //   if (currentRootTree.data > newRootTree.data) {
    //     if (!currentRootTree.left) {
    //       currentRootTree.left = newRootTree;
    //       return;
    //     }
    //     currentRootTree = currentRootTree.left;
    //   } else {
    //     if (!currentRootTree.right) {
    //       currentRootTree.right = newRootTree;
    //       return;
    //     }
    //     currentRootTree = currentRootTree.right;
    //   }
    // }
  }

  has(data) {

    return searchWithin(this.rootTree, data);

    function searchWithin(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return (data < node.data)
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  find(data) {

    return findWithin(this.rootTree, data);

    function findWithin(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      return (data < node.data)
        ? findWithin(node.left, data)
        : findWithin(node.right, data);
    }
  }

  remove(data) {

    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) return;

    let current = this.rootTree;
    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this.rootTree) return;

    let current = this.rootTree;
    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}