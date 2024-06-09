function transformString(str) {
    const length = str.length;
    let result = str;
  
    if (length % 15 === 0) {
      // Divisible by 15, perform both operations
      result = str.split('').map(c => c.charCodeAt(0)).join(' ');
      result = result.split('').reverse().join('');
    } else if (length % 5 === 0) {
      // Divisible by 5, replace each character with its ASCII code
      result = str.split('').map(c => c.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
      // Divisible by 3, reverse the entire string
      result = str.split('').reverse().join('');
    }
  
    return result;
  }
  