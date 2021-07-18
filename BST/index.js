class Node {
  constructor(data) {
    this.data = [data];
    this.down = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.down) {
      this.down.insert(data);
    } else if (data < this.data) {
      this.down = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.down) {
      return this.down.contains(data);
    }

    return null;
  }
}

module.exports = Node;
