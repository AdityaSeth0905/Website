const images = document.querySelectorAll("img"); 

let i = 0;

setInterval(function(){
  images[i].style.display = 'block';
  i++;
}, 2000);