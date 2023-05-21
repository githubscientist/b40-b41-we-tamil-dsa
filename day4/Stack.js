class Stack {
    constructor() {
        this.items = [];
        // points to the top index of the stack
        this.top = -1; 
    }

    // returns the topmost element of the stack
    peek() {
        if (!stack.isEmpty()) {
            return this.items[this.top];
        } else {
            return 'Stack Empty';
        }
    }

    // pushes the data into the stack
    push(data) {
        this.items.push(data);
        this.top++;
    }

    // check and returns true if the stack is empty
    // false otherwise
    isEmpty() {
        return this.top == -1;
    }

    // removes the top most element from the stack
    pop() {
        if (!stack.isEmpty()) {
            this.items.pop();
            this.top--;
        } else {
            console.log('Pop operation not possible on an empty stack');
        }
    }
}

let stack = new Stack();

stack.push(4);
stack.push(6);
stack.push(7);

stack.pop();
stack.pop();

console.log(stack.peek());