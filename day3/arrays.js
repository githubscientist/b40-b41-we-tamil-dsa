let array = new Array();

array.push(3);
array.push(6);
array.push(7);

array.unshift(2);
array.unshift(1);

array.splice(3, 0, 4);

array.pop();
array.shift();
array.splice(2, 1);

console.log(array);

array.forEach((value, index, array) => {
    console.log(value, index, array, array[index]);
});