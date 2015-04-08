function squareEvensRootOdds(str){
  str = str.split('|');
  var evenOddArr = str.map(function(n) {
    if (n%2 !== 0) {
      return Math.sqrt(n);
    } else {
      return Math.pow(n,2);
    }
  });

  return evenOddArr;
}

// TEST
var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
console.log(o)
// => [1.7,16,2.2,36]
