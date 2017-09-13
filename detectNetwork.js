// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber.length === 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
    return 'American Express';
  }
  if (cardNumber.length === 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
  	return 'Diner\'s Club';
  }
  if (
  	cardNumber.startsWith('4') &&
  	(cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)
  	) {
  	return 'Visa';
  }
  var firstTwo = cardNumber.substring(0,2)*1;
  if (cardNumber.length === 16 && firstTwo >= 51 && firstTwo <= 55) {
  	return 'MasterCard';
  }
  if ( (cardNumber.length === 16 || cardNumber.length === 19) &&
  	(cardNumber.startsWith('6011') || cardNumber.startsWith('65') || ( cardNumber.substring(0,3) >= 644 && cardNumber.substring(0,3) <= 649 ))) {
  	return 'Discover';
  }
  var firstFour = cardNumber.substring(0,4);
  if (cardNumber.length >= 12 && cardNumber.length <= 19) {
    if (firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304') {
    	return 'Maestro'
    }
  }

if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
    var switchPrefixes = [4903, 4905, 4911, 4936, 564182, 633110, 633, 6759];
    for (var a = 0; a < switchPrefixes.length; a++) {
      if (cardNumber.startsWith(switchPrefixes[a].toString())) {
          return 'Switch';
      }
    }
  }
  if (cardNumber.length >= 16 && cardNumber.length <= 18) {
    var china = ['624', '625', '626', '6282', '6288'];
    for (num = 0; num < china.length; num++) {
      if (cardNumber.startsWith(china[num])) {
          return 'China UnionPay';
      }
    }
    for (var i = 622126; i <= 622925; i++) {
      if (cardNumber.startsWith(i.toString())) {
        return 'China UnionPay';
      }
    }
  }
};