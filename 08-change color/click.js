const colorBoxes = document.querySelectorAll('body > div');  
 
colorBoxes.forEach(box => {  
  box.addEventListener('click', changeBoxColor);  
});  

function changeBoxColor() {  
  const r = Math.floor(Math.random() * 256);  
  const g = Math.floor(Math.random() * 256);  
  const b = Math.floor(Math.random() * 256);  

  this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;  
}
