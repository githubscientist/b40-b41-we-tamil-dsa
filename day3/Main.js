const Array = require('./Array');

// create an empty array
let array = new Array();

array.push(3);
array.push(5);
array.push(7);

array.unshift(2);
array.unshift(1);

console.log(array.toString());

array.whileEach((value, index, array) => {
    console.log(value, index, array, array[index]);
});