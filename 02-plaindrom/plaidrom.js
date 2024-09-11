function isPalindrome(str) {    
    str = str.replace(/\s/g, '').toLowerCase();  
    
    let reversedStr = str.split('').reverse().join('');  
    
    return str === reversedStr;  
  }  
    
  console.log(isPalindrome("headphone"));  
  console.log(isPalindrome("racecar"));
