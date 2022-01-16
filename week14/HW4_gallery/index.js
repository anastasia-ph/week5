let images = ['/images/mandarin_duck.jpeg', '/images/cingulata.jpg', '/images/white_rat.jpg', '/images/kitten.jpg','/images/chick.jpg'];
let rightBlock = document.getElementById("rightBlock");
let leftBlock = document.getElementById("leftBlock");

leftBlock.src = images[0];
rightBlock.src = images[1];
let i=1;
function changePhotoNext() {
    
    if(i<images.length-1){
        leftBlock.src = images[i];
        rightBlock.src = images[i+1];
        i++;
    };
};
function changePhotoBack(){

    if(i>1){
        leftBlock.src = images[i-2];
        rightBlock.src = images[i-1];
        
        i--;
    };
};

