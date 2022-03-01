const { Parser } = require('../src/parser');

const parser = new Parser();

const program = ` '2'   `; // Why is it starting with '?

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));

//** */
