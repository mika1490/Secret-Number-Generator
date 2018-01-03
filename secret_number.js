'use strict';
module.exports = function() {
    
let secretNumber = Math.floor(Math.random()*100000)+1;
  return function() {
      return secretNumber;
  }
}
