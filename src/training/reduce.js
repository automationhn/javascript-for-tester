/* eslint-disable no-console */
/* eslint-disable max-len */
/*
The REDUCE syntax
var array = [1, 2, 3, 4];

var result = array.reduce((accumulator, element, index, array) => { return accumulator += element; }, 0)

 */

const reduceExample = function reduceExample() {
  function sum(a, b) {
    console.log(`a: ${a}, b: ${b}`);
    return a + b;
  }

  const r = [1, 2, 3, 4].reduce(sum, 0);
  console.log(r);

  console.log('--------------------------------');

  function sum1(a, b, c, d) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
    return a + b + c;
  }

  const r1 = [1, 2, 3, 4].reduce(sum1, 0);

  console.log(r1);
};


export default reduceExample;
