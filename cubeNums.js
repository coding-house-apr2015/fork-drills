function squareEvensRootOdds(str){
  str = str.split('|');
  var cubeArr = str.map(function(n) {
    return Math.sqrt(n);
  });

  return cubeArr;
}

// TEST
var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
console.log(o)
// => [27, 64, 125]
