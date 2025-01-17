/**
 * TODO write a JavaScript function that takes a string and returns it in revserse order.
 * DO NOT use the built-in reverse() method.
 * Should return the reversed string.
 * For example:
 *   reverseString("hello") should return "olleh"
 *   reverseString("world") should return "dlrow"
 *   reverseString("12345") should return "54321"
 */

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

  
  
  /**
   * TODO write a JavaScript function that takes a number and returns it in the reverse order.
   * Should return the reversed number.
   * For example:
   *   reverseNumber(12345) should return 54321
   *   reverseNumber(98765) should return 56789
   *   reverseNumber(101010) should return 10101
   */
  
  function reverseNumber(num) {
    
    let numStr = num.toString();
    
    let reversedStr = numStr.split('').reverse().join('');
    
    return parseInt(reversedStr, 10);
  }
  
  
  /**
   * TODO destruct the following object to get name and age.
   */
  const person = {
    name: "Chiru",
    age: 30,
    occupation: "Future FED"
  };
  
  const { name, age } = person;
  
  console.log(name); // Output: "Chiru"
  console.log(age);  // Output: 30

  
  
  /**
   * TODO destruct the following array the first and second element, and the remaining elements in a third variable.
   */
  
  const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];
  
  const [fruit1, fruit2,...rest] = thisArray;
  
  
  
  
  /**
   * !!!!OPTIONAL!!!!
   * TODO Write a JavaScript function that checks if a string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads * the same forward and backward. For example, "madam" is a palindrome.
   * The function should return true if the string is a palindrome and false if it is not.
   * For example:
   *    isPalindrome("madam") should return true
   *    isPalindrome("hello") should return false
   *    isPalindrome("12321") should return true
   *    isPalindrome("race car") should return true
   *    isPalindrome("coding") should return false
   */
  
 


function isPalindrome(str) {
    
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  console.log("Test Cases:");
  console.log("isPalindrome(\"madam\"):", isPalindrome("madam"));
  console.log("isPalindrome(\"hello\"):", isPalindrome("hello"));
  console.log("isPalindrome(\"12321\"):", isPalindrome("12321"));
  console.log("isPalindrome(\"race car\"):", isPalindrome("race car"));
  console.log("isPalindrome(\"coding\"):", isPalindrome("coding"));
  

  