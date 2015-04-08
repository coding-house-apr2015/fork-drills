function squareEvensRootOdds (str) {
  var split = str.split("|");
  var final = split.map(function(e){
    return e % 2 == 0 ? e * e : Math.sqrt(e)
  });
  return final;
}

var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
console.log(o);
// => [1.7,16,2.2,36]
