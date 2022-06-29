//JavaScript file to apply functionality of slider

//Read the the image class from HTML code using querySelector
var slider_img = document.getElementById("slider");
var images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
var i = 0; //Current Image Index

//function for showing previous image
function previous(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

//function for showing next image
function next(){
    if(i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

//funciton to display the required image
function setImg(){
    slider_img.src = 'images/'+images[i];
    return slider_img;
    
}
