var sentence = prompt("Enter a sentence:");
console.log(sentence);

var captureFirstLastLetters = function(sentence){
  var firstLastLetterRegex = /(^.?).*(\w).*$/gi;
  var firstLastLetter = sentence.replace(firstLastLetterRegex, '$1$2');
  return (firstLastLetter.toUpperCase());
};

// alert(captureFirstLastLetters(sentence));

var letters = captureFirstLastLetters(sentence);

var reverseLetters = function(letters) {
  return letters.charAt(1) + letters.charAt(0);
}

// alert(reverseLetters(letters));

var getFirstLastAndReversed = function (sentence){
  var FirstLast = captureFirstLastLetters(sentence);
  var LastFirst = reverseLetters(FirstLast);
  return LastFirst;
}

// alert("nested fn " + getFirstLastAndReversed(sentence));

var getFirstLastAndReversed2 = function (sentence){
  return reverseLetters(captureFirstLastLetters(sentence));
}

// alert("nested fn " + getFirstLastAndReversed2(sentence));

var concatFirstLastAndReversed = function (sentence){
  var FirstLast = captureFirstLastLetters(sentence);
  var LastFirst = reverseLetters(FirstLast);
  return sentence + LastFirst;
}

// alert("nested fn " + concatFirstLastAndReversed(sentence));

var findMiddleLetter = function(sentence){
  var sentenceLength = sentence.length;
  var halfRoundedDown = Math.floor(sentenceLength/2);
  var letterOfInterest = sentence.charAt(halfRoundedDown-1);
  return letterOfInterest;
}
// alert("Middle letter is " + findMiddleLetter(sentence));

var sentenceWithMiddleLetterUpFront = findMiddleLetter(sentence) + concatFirstLastAndReversed(sentence);
// alert("Scrambled but not reversed: " + sentenceWithMiddleLetterUpFront);

var reverseSentence = function (sentence){
  var splitString = sentence.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
// alert("Reversed: " + reverseSentence(sentenceWithMiddleLetterUpFront));

$(document).ready(function(){
  $("#img1").click(function(){
    alert("Original sentence is:\n" + sentence);
  });
  $("#img2").click(function(){
    alert("Reversed:\n" + reverseSentence(sentenceWithMiddleLetterUpFront));
  });
})
