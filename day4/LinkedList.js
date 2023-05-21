/*
    Types
        1. singly linked list
        2. doubly linked list
        3. circularly linked list

    1. Singly Linked List:
    ----------------------

    chain of list of objects/nodes linked together
    
    Or

    - a linked list has multiple nodes linked in chains
    - every node has a structure 
        - has two fields
        - first field: data : actual data
        - second field: address : address of the next node
    
    - nodes are not consecutive
    - every linked list will have a head pointer pointing to the head/first/starting element of the linked list
    - is used to store more than one element
    - insert: first, last, middle, position
    - Access: Random for array | Linear for linked list
    
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertTail(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            // list is empty
            // newNode is the head node
            this.head = newNode;
        } else {
            // create a temp head
            let thead = this.head;
            // list is not empty
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = newNode;
        }
    }

    printList() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        console.log(nodes);
    }

    // inserts the node in the head of the list
    insertHead(data) {
        // create a new node
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    // returns the length/number of nodes in the list
    length() {
        let count = 0;

        let thead = this.head;

        while (thead != null) {
            count++;
            thead = thead.next;
        }

        return count;
    }

    // deletes the head node of the list
    deleteHead() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }

    // deletes the last node/tail node of the list
    deleteTail() {
        if (this.head != null && this.head.next == null) {
            // list has only one node
            this.head = null;
        } else if(this.head != null) {
            let thead = this.head;

            while (thead.next.next != null) {
                thead = thead.next;
            }

            // thead.next.next = null
            // thead = previous node of tail node
            thead.next = null;
        }
    }
}

// create a new list
let list = new LinkedList();

// create a new node
// let newNode = new Node(3);

// list.head = new Node(3);
// list.head.next = new Node(5);
// list.head.next.next = new Node(6);
list.insertTail(3);
list.insertTail(5);
list.insertTail(7);
list.insertTail(8);
list.insertTail(10);

list.insertHead(2);
list.insertHead(1);

list.deleteHead();
list.deleteHead();

list.deleteTail();
list.deleteTail();

// console.log(list.length());

// console.log(newNode);

// console.log(list);
list.printList();

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 5,
                next: Node {
                    data: 6,
                    next: null
                }
            }
        }
    }
    
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 5,
                next: Node {
                    data: 6,
                    next: Node {
                        data: 7,
                        next: null
                    }
                }
            }
        }
    }

    thead = Node {
                    data: 6,
                    next: Node {
                        data: 7,
                        next: null
                    }
                }
*/