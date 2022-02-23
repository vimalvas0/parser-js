/**
 * Tokenizer Class
 *
 * Lazily pulls the tokens from the stream
 */

class Tokenizer {
  /**
   * @description Initialize the string.
   * @param {string} string the string currently we have
   */
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  /**
   * @description Wheather we have more tokens.
   */
  hasMoreToken() {
    return this._cursor < this._string.length;
  }

  /**
   * @description Checks if we have come to end of program.
   */
  _EOF() {
    return this._cursor == this._string.length;
  }

  /**
   * @description To get the next token
   */
  /* ------------ Algo ----------*/
  // #1. Check if we have gotten any tokens.
  // > Get the string we have ahead.
  // #2. Check start at the first character. Is it number?
  // #3. Let's see how many numbers we get. Let's stop when we don't get a number.
  // #4. That's it. We call it a number tokens.
  getNextToken() {
    // #1.
    if (!this.hasMoreToken()) {
      return null;
    }

    let string = this._string.slice(this._cursor);

    let matched = /^d+/.exec(string);
    // Number :
    if (!Number.isNaN(Number(string[0]))) {
      let number = '';
      while (!Number.isNaN(Number(string[this._cursor]))) {
        number += string[this._cursor++];
      }
      return {
        type: 'NUMBER',
        value: number,
      };
    }

    // String :
    if (string[0] == '"') {
      let literal = '';
      do {
        literal += string[this._cursor++];
      } while (string[this._cursor] != '"' && !this._EOF());
      literal += string[this._cursor];
      return {
        type: 'STRING',
        value: literal.slice(1, -1),
      };
    }
  }
}

module.exports = { Tokenizer };
