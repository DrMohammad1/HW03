function areArraysEqual(arr1, arr2) {  
  if (arr1.length !== arr2.length) {  
    return false;  
  }  
  
  for (let i = 0; i < arr1.length; i++) {  
    if (arr1[i] !== arr2[i]) {  
      return false;  
    }  
  }  
 
  return true;  
}  
  
console.log(areArraysEqual([12, 1, 8, 20, 5], [12, 1, 8, 20, 5]));
console.log(areArraysEqual([12, 1, 8, 20, 5], [12, "1", 8, 20, 5]));
