function reverseEvenLengthStrings(string){
  var strArr = string.split(',');
  var revArr = strArr.map(function(s){
    if (!(s.length%2)) {
      return s.split('').reverse().join('');
    } else {
      return s;
    }
  });
  return revArr;
}

// TEST
var s = 'cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);
console.log(o);

// => ['cat', 'elum', 'horse', 'yreuqj']
