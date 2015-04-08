/*function sum(x, y){
  return x + y;
}

// TEST

var s = sum(3, 4);
console.log('the sum of 3 and 4 is', s);
*/


var s = '3;4;5';
var s = s.split(';');

var o = cubeNums(s);

function cubeNums (str){
  for(var i = 0; i < str.length; i++){
    Math.pow(parseInt(str[i], 3));
  }
  return(o);
}
