function reverseEvenLengthStrings(str){
  stringArr = str.split(",");
  var final = stringArr.map(function(e){
    return e.length % 2 === 0 ? e.split("").reverse().join("") : e;
  });
  return final;
}

var s = 'cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);
// => ['cat', 'elum', 'horse', 'yreuqj']
console.log(o);
