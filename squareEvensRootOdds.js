var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
// => [1.7,16,2.2,36]

function squareEvensRootOdds(str){
  str = str.split('|');
  var num = str.map(function(n) {
    if (n % 2 === 0) {
      return Math.pow(n, 2);
    }
    else {
      return Math.round(Math.sqrt(n));
    }
  });
}
