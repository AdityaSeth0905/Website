var img = document.getElementById('Galleryimages');

var slides = ['bhaiya.jpg','1.jpg','3.jpg','5.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg'];

var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = '<img src='+slides[Start-1]+'>';
   
}
setInterval(slider,1000);