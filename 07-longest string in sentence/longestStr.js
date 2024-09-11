function findLongestWord(sentence) {   
  const words = sentence.split(" ");  
 
  let longestWord = "";  
  let longestLength = 0;  
  
  for (let i = 0; i < words.length; i++) {  
    if (words[i].length > longestLength) {  
      longestWord = words[i];  
      longestLength = words[i].length;  
    }  
  }  

  return longestWord;  
}  

console.log(findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit"));
