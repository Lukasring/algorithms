"use strict";
exports.__esModule = true;
// const LinkedListNode = require("./LinkedListNode");
var LinkedListNode_1 = require("./LinkedListNode");
//! currently only works with numbers and strings!
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        // this.tail = null;
    }
    //Adds node to the front of the list
    LinkedList.prototype.prepend = function (data) {
        // if (!this.head) {
        //   this.head = new LinkedListNode(data);
        //   this.head.next = this.tail;
        //   return;
        // }
        // const newHead = new LinkedListNode(value);
        // newHead.next = this.head;
        // this.head = newHead;
        //* trumpesnis budas
        this.head = new LinkedListNode_1["default"](data, this.head);
    };
    //adds node to the end of the list
    LinkedList.prototype.append = function (data) {
        if (!this.head) {
            this.head = new LinkedListNode_1["default"](data);
            return;
        }
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new LinkedListNode_1["default"](data);
    };
    LinkedList.prototype.deleteByData = function (data) {
        if (!this.head)
            return;
        if (data === this.head.data) {
            this.head = this.head.next;
            return;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.next.data === data) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    };
    LinkedList.prototype.printListData = function () {
        var currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    };
    return LinkedList;
}());
var list = new LinkedList();
list.append(100);
list.append(200);
list.append(400);
list.prepend(300);
list.deleteByData(400);
console.log(list);
list.printListData();
