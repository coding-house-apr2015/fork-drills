
function reverseEvenLengthStrings(string){

  var stringArray = string.split(',');
  var evenString = stringArray.map(function(s){

    return s.length % 2 === 0 ? s.split('').reverse().join('') : s;

  });

  return evenString;

}

var s = 'cat, mule, horse, jquery';
var o = reverseEvenLengthStrings(s);

console.log(o);
