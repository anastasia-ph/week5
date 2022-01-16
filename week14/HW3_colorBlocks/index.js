let changeColor = () => {
    let block = document.getElementsByClassName("color-block");
    for (let i=0; i<block.length; i++){
    if (block[i].style.background != "rosybrown"){
        block[i].style.background = "rosybrown"
    }
    else{
        block[i].style.background="white"
    };
};
};
