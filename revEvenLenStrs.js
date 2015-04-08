var s = 'cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);
// => ['cat', 'elum', 'horse', 'yreuqj']

function reverseEvenLengthStrings(str){
    var array = s.split(',');
    var newArray = array.map(function(num){
            if (num.length % 2 === 0) {
                return num.split('').reverse().join('');
                } else { return num; }
        });
    console.log(newArray);
    return newArray;
    }
o;
