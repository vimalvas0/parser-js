/**
 * class Parser has methods for parsing
 *
 */

class Parser {
  /**
   *
   * @param {String} string - current string to parse
   */
  parse(string) {
    this._string = string;

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
    return this.NumericLiteral();
  }

  NumericLiteral() {
    return {
      type: "NumeralLiteral",
      value: Number(this._string),
    };
  }
}

module.exports = { Parser };
