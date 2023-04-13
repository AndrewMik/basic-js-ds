const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let node = this._root;

    if(node === null){
      this._root = {
        "data": data,
        left: null,
        right: null,
      }
    } else {
      while(true){
        if(node.data > data){
          if(node.left){
            node = node.left;
          } else {
            node.left = {
              "data": data,
                left: null,
                right: null,
            }
            break;
          }
        } else if(node.data < data){
          if(node.right){
            node = node.right;
          } else {
            node.right = {
              "data": data,
              left: null,
              right: null,
            }
            break;
          }
        } else {
          break;
        }
      }    
    }
  }

  has(data) {
    let node = this._root;
    
    while(node){
      if(node.data === data){
        return true;
      }

      if(node.data > data){
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return false;
  }

  find(data) {
    let node = this._root;
    
    while(node){
      if(node.data === data){
        return node;
      }

      if(node.data > data){
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return null;
  }

  remove(data) {
    this._root = this._deleteNode(this._root, data);
  }

  _deleteNode(node, data){
    if (!node){
      return null;
    } 

    if (data < node.data) {
      node.left = this._deleteNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._deleteNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      } 
      
      if (!node.left) {
        return node.right;
      } 
      
      if (!node.right) {
        return node.left;
      }

      const minNodeInRightSubtree = this._findMinElement(node.right);

      node.data = minNodeInRightSubtree.data;
      node.right = this._deleteNode(node.right, minNodeInRightSubtree.data);

      return node;
    }
  }


  _findMinElement(node) {
    if (node.left === null) {
      return node;
    }

    return this._findMinElement(node.left);
  }

  min() {
    let node = this._root;
    
    while(node){
      if(node.left){
        node = node.left;
      } else {
        return node.data;
      }      
    }
  }

  max() {
    let node = this._root;
    
    while(node){
      if(node.right){
        node = node.right;
      } else {
        return node.data;
      }      
    }
  }
}

module.exports = {
  BinarySearchTree
};