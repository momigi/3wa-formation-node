
const sum = function (number) {
    let total = 0;
  
    for (let index = 0; index < number; index++) {
      if (index % 3 === 0 || index % 5 === 0) {
        total += index; // total = total + index
      }
    }
  
    return total;
  };
  
  
  module.exports = sum;