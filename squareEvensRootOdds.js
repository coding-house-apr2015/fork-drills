function squareEvensRootOdds(string) {
  var array = string.split('|');
  array = array.map(function(num) {
    if (num % 2) // modulus will return 0 (false) for even
    {
      num = Math.sqrt(num);
      num = num.toFixed(1);
      num = parseFloat(num);
    }
    else {
      num = Math.pow(num, 2);
    }
    return num;
  });
  return array;
}

var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
console.log(o);
// => [1.7,16,2.2,36]
