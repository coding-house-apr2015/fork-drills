function cubeNums(string){
  results = [];
  numbers = string.split(';');

  numbers.map(function(num){
    num = parseFloat(num);
    results.push(Math.pow(num,3));
  });
  return results;
}

/*
var s = '3;4;5';
var o = cubeNums(s);
console.log(o);
   => [27, 64, 125]
*/
