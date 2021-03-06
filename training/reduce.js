/*
The REDUCE syntax
var array = [1, 2, 3, 4];

var result = array.reduce((accumulator, element, index, array) => { return accumulator += element; }, 0)

 */

var reduceExample = function() {
    const sum = function(a, b) {
        console.log(`a: ${a}, b: ${b}`);
        return a + b;
    }
    
    const r = [1, 2, 3, 4].reduce(sum, 0);
    console.log(r);

    console.log('--------------------------------');

    const sum1 = function(a, b, c, d) {
        console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
        return a + b + c;
    }
    
    const r1 = [1, 2, 3, 4].reduce(sum1, 0);
    
    console.log(r1);
}


export default reduceExample; 