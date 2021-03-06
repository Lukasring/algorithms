// const LinkedListNode = require("./LinkedListNode");
import LinkedListNode from "./LinkedListNode";

//! currently only works with numbers and strings!

class LinkedList {
  head: LinkedListNode;
  constructor() {
    this.head = null;
    // this.tail = null;
  }

  //Adds node to the front of the list
  prepend(data: number | string) {
    // if (!this.head) {
    //   this.head = new LinkedListNode(data);
    //   this.head.next = this.tail;
    //   return;
    // }
    // const newHead = new LinkedListNode(value);
    // newHead.next = this.head;
    // this.head = newHead;
    //* trumpesnis budas
    this.head = new LinkedListNode(data, this.head);
  }

  //adds node to the end of the list
  append(data: number | string) {
    if (!this.head) {
      this.head = new LinkedListNode(data);
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new LinkedListNode(data);
  }

  deleteByData(data: number | string) {
    if (!this.head) return;
    if (data === this.head.data) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  printListData() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList();
list.append(100);
list.append(200);
list.append(400);
list.prepend(300);

list.deleteByData(200);

console.log(list);
list.printListData();
