function reverseEvenLengthStrings(s) {
  return s.split(',').map(function(word){
    if (word.length % 2 === 0){return word.split('').reverse().join('');}
    else {return word;}
  });
}


var s = 'cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);
console.log(o);
// => ['cat', 'elum', 'horse', 'yreuqj']
