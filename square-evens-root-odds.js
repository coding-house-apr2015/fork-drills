function squareEvensRootOdds(s){
  return s.split('|').map(function(num){
    if (num % 2 === 0){return Math.pow(num,2).toFixed(2);}
    else {return Math.sqrt(num).toFixed(2);}
  });
}

var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
//console.log(o);
// => [1.7,16,2.2,36]
