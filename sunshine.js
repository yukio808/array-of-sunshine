/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
var result = "";

charArray = str.split("");

reversedArray = charArray.reverse();

result = reversedArray.join("");

return result;
};

/**
  Write a function that takes two parameters as input in the order
  of string, character. With the first string parameter use Array
  functionality remove the last character and put it at the beginning
  of the array. Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/
function spliceString(str, char) {
  var result =  str[str.length -1] + str.slice(0, -1);
  result = result.slice(0, -1) + char + result[result.length-1];

  return result;

};
/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
function speakPigLatin(strArray) {
  var resultarray = strArray.map(function (str){
    var result = str.slice(1,str.length) + str[0] + "ay";
    return result;
  });
  return resultarray;
};