let addNumbers = function(){
    let a = document.getElementById("firstNumber");
    a = a.value;
    let b = document.getElementById("secondNumber");
    b = b.value;
    document.getElementById("resultOutput").innerHTML = Number(a) + Number(b);
};

let subtractNumbers = function(){
    let a = document.getElementById("firstNumber");
    a = a.value;
    let b = document.getElementById("secondNumber");
    b = b.value;
    document.getElementById("resultOutput").innerHTML = ( Number(a) - Number(b));
}
let multiplyNumbers = function(){
    let a = document.getElementById("firstNumber");
    a = a.value;
    let b = document.getElementById("secondNumber");
    b = b.value;
    document.getElementById("resultOutput").innerHTML = ( Number(a) * Number(b));
}
let divideNumbers = function() {
    let a = document.getElementById("firstNumber");
    a = a.value;
    let b = document.getElementById("secondNumber");
    b = b.value;
    document.getElementById("resultOutput").innerHTML = ( Number(a) / Number(b));
}
let clearFields = () => {
    let a = document.getElementById("firstNumber");
    a.value = '';
    let b = document.getElementById("secondNumber");
    b.value = '';
    document.getElementById("resultOutput").innerHTML = '';
};
