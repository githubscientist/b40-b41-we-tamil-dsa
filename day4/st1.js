// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        // points to the top index of the stack
        this.top = -1; 
    }

    // returns the topmost element of the stack
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
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
        if (!this.isEmpty()) {
            this.items.pop();
            this.top--;
        }
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let words = userInput[0].split(' ');

    // create a new stack
    let stack = new Stack();

    // iterate the words array
    for (let word of words) {
        // check if the stack is empty
        if (stack.isEmpty()) {
            stack.push(word);
        } else {
            // check if the top element of the stack and the current word are equal
            if (word == stack.peek()) {
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    // print the stack
    console.log(stack.items.join(' '));

  //end-here
});

/*

    words = [ 'I', 'am', 'john', 'cena', 'cena', 'john' ]

    stack = ['I', 'am']

*/