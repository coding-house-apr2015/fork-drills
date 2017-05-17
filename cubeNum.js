function cubeNums(string) {
  var test = string.split(";");
  var nums = test.map(function(e){return e});
  var final = nums.map(function(e){return e * e * e});
  return final;
}

var s = '3;4;5';
var o = cubeNums(s);
console.log(o);
// => [27, 64, 125]
