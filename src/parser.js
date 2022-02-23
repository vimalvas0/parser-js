const { Tokenizer } = require('./tokenizer');

/**
 * class Parser has methods for parsing
 *
 */

class Parser {
  /**
   *
   * @param {String} string - current string to parse
   */

  constructor() {
    this._string = '';
    this._tokenizer = new Tokenizer();
  }

  parse(string) {
    this._string = string;
    this._tokenizer.init(string);

    // Get the tokenizer to take the first token, which is our lookahead.
    // Lookahead token is used in predictive parsing.
    this._lookahead = this._tokenizer.getNextToken();

    // recursively call the Program, the entry point
    return this.Program();
  }

  /**
   * Main Entry Point
   *
   * Program
   * : NumericLiteral
   * ;
   *
   */

  Program() {
    switch (this._lookahead.type) {
      case 'NUMBER':
        return this.NumericLiteral();
      case 'STRING':
        return this.StringLiteral();
      default:
        return SyntaxError('Understandable Literal 🙄');
    }
  }

  NumericLiteral() {
    const token = this._eats('NUMBER');
    return {
      type: 'Program',
      body: {
        type: 'NumeralLiteral',
        value: Number(token.value),
      },
    };
  }

  StringLiteral() {
    const token = this._eats('STRING');
    return {
      type: 'Program',
      body: {
        type: 'StringLiteral',
        value: `${token.value}`,
      },
    };
  }

  _eats(tokenType) {
    const token = this._lookahead;

    if (token == null) {
      throw new SyntaxError(`Unexpected end of input, expected "${tokenType}"`);
    }

    if (token.type !== tokenType) throw new SyntaxError(`Unexpected token : ${token.value}, expected: "${tokenType}"`);

    // Advance to the next token..
    this._lookahead = this._tokenizer.getNextToken();

    return token;
  }
}

module.exports = { Parser };
