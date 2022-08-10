
module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  for(let i = 0; i < str.length; i++) {
    let symbol = str[i];
    
    for(let i = 0; i < bracketsConfig.length; i++) {
      let config = bracketsConfig[i];
      let topSymbol = stack[stack.length - 1];
      if(config.includes(symbol)) {
        if (symbol === config[1]) {
          if (topSymbol === config[0]) {
            stack.pop();
          } else {
            stack.push(symbol);
          }
        } else {
          stack.push(symbol);
        }
      }
    }
  }
  return stack.length === 0;
}
