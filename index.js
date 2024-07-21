class Formatter {
  static capitalize(string) {
    if (typeof string !== 'string') throw new TypeError('Argument must be a string');
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    if (typeof string !== 'string') throw new TypeError('Argument must be a string');
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(string) {
    if (typeof string !== 'string') throw new TypeError('Argument must be a string');
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !smallWords.includes(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
      })
      .join(' ');
  }
}
