
function cubeNums(s) {
  s = s.split(';');
  s = s.map(function(n) {
    n = parseInt(n);
    n = Math.pow(n, 3);
    return n;
  });
  return s;
}

var s = '3;4;5';
var o = cubeNums(s);
console.log(o);
// => [27, 64, 125]
