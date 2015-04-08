var s ='cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);


function reverseEvenLengthStrings(str) {
  str = str.split(',').map(function(n){
    if (n.length%2 === 0){
      n = n.split('').reverse().join('');
      return n;
    }
    return str;
  });
}
