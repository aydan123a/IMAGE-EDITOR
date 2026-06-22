let img = document.getElementById("image");
let size = 200;
let rotation = 0;
document.getElementById("upload").onchange=function(e){


    let file=e.target.files[0];


    let reader=new FileReader();


    reader.onload=function(){

        img.src=reader.result;

        img.style.width=size+"px";

    }


    reader.readAsDataURL(file);

}
function increaseSize(){

    size += 50;

    img.style.width=size+"px";

}
function decreaseSize(){

    if(size>50){

        size -=50;

        img.style.width=size+"px";

    }

}
function rotateImage(){

    rotation +=90;


    img.style.transform=
    `rotate(${rotation}deg)`;

}
function grayImage(){
    if(img.style.filter=="grayscale(100%)"){

        img.style.filter="none";

    }
    else{

        img.style.filter="grayscale(100%)";

    }

}
