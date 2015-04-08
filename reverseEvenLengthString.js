function reverseEvenLengthStrings(str){
  var strings = str.split(',');
  var processedStr = strings.map(function(s){
    return (s.length % 2) ? s : s.split('').reverse().join('');
  });
  return processedStr;
}



//Tests:
var s = 'cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);
console.log(o);
// => ['cat', 'elum', 'horse', 'yreuqj']
