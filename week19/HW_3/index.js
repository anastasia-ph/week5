let clearFields = () => {
    let a = document.getElementById("firstNumber");
    a.value = '';
    let b = document.getElementById("secondNumber");
    b.value = '';
    document.getElementById("resultOutput").innerHTML = '';
};

let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton")
class Calculator{
    constructor (a, b){
        this.a = a;
        this.b = b;
    }
        static add(a,b){
            return Number(a)+Number(b);
        }
        static subtract(a,b){
            return a-b;
        }
        static multiply(a,b){
            return a*b;
        }
        static divide(a,b){
            return a/b;
        }

}

addButton.addEventListener("click", function(event) {
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("resultOutput").innerHTML = Calculator.add(a,b)}
    )
subtractButton.addEventListener("click", function(event){
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("resultOutput").innerHTML = Calculator.subtract(a,b)}
    )
multiplyButton.addEventListener("click",function(event){
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("resultOutput").innerHTML = Calculator.multiply(a,b)}
    )
divideButton.addEventListener("click", function(event){
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("resultOutput").innerHTML = Calculator.divide(a,b)}
    )

