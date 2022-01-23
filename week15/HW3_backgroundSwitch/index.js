

function backgroundColorSwitch() {
let bodyBackground = document.getElementsByClassName("wrapper");
let selectForm = document.getElementById("selectForm").value;
switch (selectForm){
    case 'white':
        bodyBackground[0].style.background = "white";
        break;
    case 'blue':
        bodyBackground[0].style.background = "deepskyblue";
        break;
    case 'green':
        bodyBackground[0].style.background = "green";
        break;
    case 'pink':
        bodyBackground[0].style.background = "pink";
        break;
    case 'purple':
        bodyBackground[0].style.background = "purple";
        break;

    case 'yellow':
        bodyBackground[0].style.background = "yellow";
        break;
}
};
