
function squareEvensRootOdds(string){
  var array = string.split("|");
  var num = [];
  for (var i in array){

    if (i % 2 === 0) {
      num.push (Math.pow(i, 2));
    }
    else {
      num.push(Math.sqrt(i, 2));
    }

  }
  return num;
}

var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
console.log(o);
