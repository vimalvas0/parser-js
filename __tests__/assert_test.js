const { Parser } = require('../src/parser');
const colors = require('colors');
const assert = require('assert').strict;

const parser = new Parser();

const tests = [require('./literal-test.js')];

const exec = () => {
  const program = ` 

// Number below 


42


/*
* this part
* gets ignored.
*/


`; // Why is it starting with '?

  const ast = parser.parse(program);

  //   console.log(JSON.stringify(ast, null, 2));

  //** */
};

function test(literal, expected) {
  let ast = parser.parse(literal);
  assert.deepStrictEqual(ast, expected);
}

try {
  tests.forEach((runTest) => runTest(test));
  console.log('All assertions passed ✅'.green);
} catch (e) {
  console.log('Test failed ❌❌❌'.red);
  console.log('---------MESSAGE-----------');
  console.log(e.message);
  console.log('----------------------------');
}
