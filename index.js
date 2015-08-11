var actions = require("./actions");
var config = require("./config");

var move = actions.move.bind(actions);

function solve(n){
  //setup board  
  moveStack(n, 0, 2);
  
  // fill in solution here

}

var moveStack = function (size, start, end) {
  //base
  if(size === 1) {
    move(start,end);
  }
  else {
    var other = findOther(start, end);
    moveStack(size - 1, start, other);
    move(start, end);
    moveStack(size - 1, other, end);
  }
}

var findOther = function (start, end) {
  if(start === 0 && end === 1) {
    return 2;
  }
  else if (start === 0 && end === 2) {
    return 1;
  }
  else if (start === 1 && end === 0) {
    return 2;
  }
  else if (start === 1 && end === 2) {
    return 0;
  }
  else if (start === 2 && end === 0) {
    return 1;
  }
  else if (start === 2 && end === 1) {
    return 0;
  }
}

solve(config.pieces);
actions.finish();
