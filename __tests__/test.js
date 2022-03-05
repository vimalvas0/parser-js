const { Parser } = require('../src/parser');

const parser = new Parser();

const program = ` 

// Number below 


42


/*
* this part
* gets ignored.
*/


`; // Why is it starting with '?

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));

//** */
