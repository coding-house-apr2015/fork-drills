function reverseEvenLengthStrings(string) {
  var arrayOfStrings = string.split(',');
  arrayOfStrings = arrayOfStrings.map(function(word) {
    if(word.length % 2 === 0) {
      word = word.split('').reverse().join('');
    }
    return word;
  });
  return arrayOfStrings;
}

var s = 'cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);
console.log(o);
// => ['cat', 'elum', 'horse', 'yreuqj']
