var img = document.getElementById('images');

var slides = ['CIIE_logo.jpg','SRM_logo.jpg',' MHRD_logo.jpg'];

var Start=0
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);