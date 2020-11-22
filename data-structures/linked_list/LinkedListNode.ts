class LinkedListNode {
  data: number | string;
  next: LinkedListNode;
  constructor(data: number | string, next: LinkedListNode = null) {
    this.data = data;
    this.next = next;
  }
}

// module.exports = LinkedListNode;
export default LinkedListNode;
