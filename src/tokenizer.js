const Spec = [
  //-------------------------------
  //
  [/^\s+/, null], // Blank spaces
  [/^\/\/.*/, null], // Single-line comments
  [/^\/\*[\s\S]*?\*\//, null], // Double-line commnents
  //----------------------------------
  //Number
  [/^\d+/, 'NUMBER'],

  //-----------------------------------
  //String
  [/"[^"]*"/, 'STRING'],
  [/'[^']*'/, 'STRING'],
];

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

    let string = this._string.slice(this._cursor++);
    console.log(string);

    for (const [regex, tokenType] of Spec) {
      let matched = this._match(regex, string);

      if (matched == null) {
        continue;
      }

      if (tokenType == null) {
        return this.getNextToken();
      }

      return {
        type: tokenType,
        value: matched,
      };
    }

    // let matched = /^\d+/.exec(string);
    // // Number :
    // if (matched != null) {
    //   this._cursor += matched[0].length;
    //   return {
    //     type: 'NUMBER',
    //     value: matched[0],
    //   };
    // }

    // matched = /"[^"]*"/.exec(string);
    // // String :
    // if (matched !== null) {
    //   this._cursor += matched[0].length;
    //   return {
    //     type: 'STRING',
    //     value: matched[0],
    //   };
    // }

    throw new Error(`Unrecognized token : ${string[0]} `);
  }

  _match(regex, string) {
    let matched = regex.exec(string);
    if (matched !== null) {
      return matched[0];
    }

    return null;
  }
}

module.exports = { Tokenizer };
