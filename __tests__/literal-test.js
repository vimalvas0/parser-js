module.exports = (test) => {
  test(`42`, {
    type: 'Program',
    body: {
      type: 'NumeralLiteral',
      value: 42,
    },
  });

  test(`"hello"`, {
    type: 'Program',
    body: {
      type: 'StringLiteral',
      value: "\"Hello\"",
    },
  });

  test(`'hello'`, {
    type: 'Program',
    body: {
      type: 'StringLiteral',
      value: "'hello'",
    },
  });
};
